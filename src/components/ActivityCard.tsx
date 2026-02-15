'use client';

import { useRef, useCallback, useEffect, useState } from 'react';
import { Activity } from '@/types';

interface ActivityCardProps {
  activity: Activity;
  onSwipe: (direction: 'left' | 'right') => void;
  isFavorite: boolean;
  isDone: boolean;
  onTap?: () => void;
}

export function ActivityCard({ activity, onSwipe, isFavorite, isDone, onTap }: ActivityCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const dragState = useRef({
    isDragging: false,
    startX: 0,
    startY: 0,
    currentX: 0,
    velocityX: 0,
    lastX: 0,
    lastTime: 0,
    animating: false,
    totalMovement: 0,
  });
  const [visual, setVisual] = useState({ x: 0, rotation: 0, opacity: 1 });
  const [isDragging, setIsDragging] = useState(false);
  const rafRef = useRef<number>(0);

  const SWIPE_THRESHOLD = 80;
  const VELOCITY_THRESHOLD = 0.5;
  const MAX_ROTATION = 12;
  const TAP_THRESHOLD = 10;

  const updateVisual = useCallback((x: number) => {
    const rotation = (x / window.innerWidth) * MAX_ROTATION * 2;
    const progress = Math.min(Math.abs(x) / (SWIPE_THRESHOLD * 2), 1);
    const opacity = 1 - progress * 0.15;
    setVisual({ x, rotation, opacity });
  }, []);

  const animateSpringBack = useCallback(() => {
    const state = dragState.current;
    state.animating = true;
    let x = state.currentX;
    let velocity = 0;

    const step = () => {
      const force = -x * 0.15;
      velocity = (velocity + force) * 0.75;
      x += velocity;
      if (Math.abs(x) < 0.5 && Math.abs(velocity) < 0.5) {
        updateVisual(0);
        state.currentX = 0;
        state.animating = false;
        return;
      }
      updateVisual(x);
      state.currentX = x;
      rafRef.current = requestAnimationFrame(step);
    };
    rafRef.current = requestAnimationFrame(step);
  }, [updateVisual]);

  const animateExit = useCallback((direction: 'left' | 'right') => {
    const state = dragState.current;
    state.animating = true;
    const targetX = direction === 'right' ? window.innerWidth * 1.5 : -window.innerWidth * 1.5;
    let x = state.currentX;
    const speed = Math.max(Math.abs(state.velocityX) * 0.5, 18);
    const step = direction === 'right' ? speed : -speed;

    const animate = () => {
      x += step;
      const rotation = (x / window.innerWidth) * MAX_ROTATION * 3;
      const progress = Math.abs(x) / Math.abs(targetX);
      setVisual({ x, rotation, opacity: 1 - progress * 0.6 });
      if (Math.abs(x) < Math.abs(targetX)) {
        rafRef.current = requestAnimationFrame(animate);
      } else {
        state.animating = false;
        setVisual({ x: 0, rotation: 0, opacity: 1 });
        state.currentX = 0;
        onSwipe(direction);
      }
    };
    rafRef.current = requestAnimationFrame(animate);
  }, [onSwipe]);

  const handleStart = useCallback((clientX: number, clientY: number) => {
    const state = dragState.current;
    if (state.animating) return;
    state.isDragging = true;
    state.startX = clientX;
    state.startY = clientY;
    state.lastX = clientX;
    state.lastTime = Date.now();
    state.velocityX = 0;
    state.totalMovement = 0;
    setIsDragging(true);
  }, []);

  const handleMove = useCallback((clientX: number) => {
    const state = dragState.current;
    if (!state.isDragging) return;
    const now = Date.now();
    const dt = now - state.lastTime;
    if (dt > 0) state.velocityX = (clientX - state.lastX) / dt;
    state.lastX = clientX;
    state.lastTime = now;
    const deltaX = clientX - state.startX;
    state.totalMovement = Math.max(state.totalMovement, Math.abs(deltaX));
    state.currentX = deltaX;
    updateVisual(deltaX);
  }, [updateVisual]);

  const handleEnd = useCallback(() => {
    const state = dragState.current;
    if (!state.isDragging) return;
    state.isDragging = false;
    setIsDragging(false);

    // Detect tap
    if (state.totalMovement < TAP_THRESHOLD) {
      state.currentX = 0;
      updateVisual(0);
      onTap?.();
      return;
    }

    const absDelta = Math.abs(state.currentX);
    const absVelocity = Math.abs(state.velocityX);
    const direction = state.currentX > 0 ? 'right' : 'left';

    if (absDelta > SWIPE_THRESHOLD || (absVelocity > VELOCITY_THRESHOLD && absDelta > 30)) {
      animateExit(direction as 'left' | 'right');
    } else {
      animateSpringBack();
    }
  }, [animateExit, animateSpringBack, onTap, updateVisual]);

  // Mouse events
  const onMouseDown = useCallback((e: React.MouseEvent) => {
    e.preventDefault();
    handleStart(e.clientX, e.clientY);
  }, [handleStart]);

  useEffect(() => {
    const onMouseMove = (e: MouseEvent) => handleMove(e.clientX);
    const onMouseUp = () => handleEnd();
    if (isDragging) {
      window.addEventListener('mousemove', onMouseMove);
      window.addEventListener('mouseup', onMouseUp);
    }
    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mouseup', onMouseUp);
    };
  }, [isDragging, handleMove, handleEnd]);

  // Touch events
  const onTouchStart = useCallback((e: React.TouchEvent) => {
    handleStart(e.touches[0].clientX, e.touches[0].clientY);
  }, [handleStart]);
  const onTouchMove = useCallback((e: React.TouchEvent) => {
    handleMove(e.touches[0].clientX);
  }, [handleMove]);
  const onTouchEnd = useCallback(() => handleEnd(), [handleEnd]);

  useEffect(() => {
    return () => { if (rafRef.current) cancelAnimationFrame(rafRef.current); };
  }, []);

  const energyConfig = {
    low: { color: 'bg-emerald-100 text-emerald-700', emoji: '🧘' },
    medium: { color: 'bg-amber-100 text-amber-700', emoji: '🏃' },
    high: { color: 'bg-rose-100 text-rose-700', emoji: '🔥' },
  };
  const locationConfig = {
    indoor: { emoji: '🏠', label: 'Indoor' },
    outdoor: { emoji: '🌳', label: 'Outdoor' },
    either: { emoji: '🏠🌳', label: 'Anywhere' },
  };

  const ec = energyConfig[activity.energy];
  const lc = locationConfig[activity.location];

  return (
    <div
      ref={cardRef}
      className="relative w-[320px] bg-white rounded-3xl shadow-xl select-none touch-none overflow-hidden"
      style={{
        transform: `translateX(${visual.x}px) rotate(${visual.rotation}deg)`,
        opacity: visual.opacity,
        cursor: isDragging ? 'grabbing' : 'grab',
        willChange: isDragging ? 'transform, opacity' : 'auto',
      }}
      onMouseDown={onMouseDown}
      onTouchStart={onTouchStart}
      onTouchMove={onTouchMove}
      onTouchEnd={onTouchEnd}
    >
      {/* Swipe indicators */}
      <div
        className="absolute top-6 left-4 px-4 py-2 rounded-full font-bold text-sm bg-red-500 text-white z-10 shadow-lg"
        style={{ opacity: visual.x < -20 ? Math.min((-visual.x - 20) / 60, 1) : 0 }}
      >
        ✗ SKIP
      </div>
      <div
        className="absolute top-6 right-4 px-4 py-2 rounded-full font-bold text-sm bg-green-500 text-white z-10 shadow-lg"
        style={{ opacity: visual.x > 20 ? Math.min((visual.x - 20) / 60, 1) : 0 }}
      >
        SAVE ♥
      </div>

      {/* Status badges */}
      {!isDragging && (isFavorite || isDone) && (
        <div className="absolute top-4 right-4 flex gap-1.5 z-10">
          {isFavorite && <span className="w-8 h-8 bg-pink-100 rounded-full flex items-center justify-center text-sm">❤️</span>}
          {isDone && <span className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center text-sm">✅</span>}
        </div>
      )}

      {/* Card Content */}
      <div className="p-5 flex flex-col" style={{ minHeight: '420px' }}>
        {/* Title & Description */}
        <div className="mb-4">
          <h2 className="text-xl font-bold text-gray-900 mb-1.5 leading-tight">
            {activity.title}
          </h2>
          <p className="text-gray-500 text-sm leading-relaxed">
            {activity.description}
          </p>
        </div>

        {/* Chips */}
        <div className="flex flex-wrap gap-1.5 mb-4">
          <span className={`px-2.5 py-1 rounded-full text-xs font-semibold ${ec.color}`}>
            {ec.emoji} {activity.energy}
          </span>
          <span className="px-2.5 py-1 rounded-full text-xs font-semibold bg-blue-100 text-blue-700">
            {lc.emoji} {lc.label}
          </span>
          <span className="px-2.5 py-1 rounded-full text-xs font-semibold bg-purple-100 text-purple-700">
            ⏱ {activity.duration}min
          </span>
          {activity.season && activity.season !== 'any' && (
            <span className="px-2.5 py-1 rounded-full text-xs font-semibold bg-orange-100 text-orange-700">
              {activity.season === 'summer' ? '☀️' : activity.season === 'winter' ? '❄️' : activity.season === 'autumn' ? '🍂' : '🌸'} {activity.season}
            </span>
          )}
        </div>

        {/* Ages */}
        <div className="mb-3">
          <div className="flex items-center gap-2">
            <span className="text-xs font-semibold text-gray-400 uppercase tracking-wider">Ages</span>
            <div className="flex gap-1">
              {activity.ageGroups.map(ag => (
                <span key={ag} className="px-2 py-0.5 bg-gray-100 rounded text-xs text-gray-600 font-medium">{ag}</span>
              ))}
            </div>
          </div>
        </div>

        {/* Supplies */}
        <div className="mb-4 flex-1">
          <span className="text-xs font-semibold text-gray-400 uppercase tracking-wider">Supplies</span>
          {activity.suppliesNeeded.length === 0 ? (
            <p className="text-sm text-emerald-600 font-medium mt-1">Nothing needed! 🎉</p>
          ) : (
            <p className="text-sm text-gray-600 mt-1 leading-relaxed">
              {activity.suppliesNeeded.join(' · ')}
            </p>
          )}
        </div>

        {/* Quick start */}
        <div className="bg-gray-50 rounded-xl p-3 mb-2">
          <p className="text-xs text-gray-400 font-semibold uppercase tracking-wider mb-1">Quick start</p>
          <p className="text-sm text-gray-600">{activity.instructions[0]}</p>
        </div>

        {/* Footer */}
        <div className="flex justify-between items-center mt-2">
          <span className="text-xs text-gray-400">⚡ {activity.prepTime}min prep</span>
          <span className="text-xs text-purple-400 font-medium">Tap for details →</span>
        </div>
      </div>
    </div>
  );
}
