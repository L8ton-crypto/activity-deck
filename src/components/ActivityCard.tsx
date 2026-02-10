'use client';

import { useRef, useCallback, useEffect, useState } from 'react';
import { Activity } from '@/types';

interface ActivityCardProps {
  activity: Activity;
  onSwipe: (direction: 'left' | 'right') => void;
  isFavorite: boolean;
  isDone: boolean;
}

export function ActivityCard({ activity, onSwipe, isFavorite, isDone }: ActivityCardProps) {
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
  });
  const [visual, setVisual] = useState({ x: 0, rotation: 0, opacity: 1 });
  const [isDragging, setIsDragging] = useState(false);
  const [exitDirection, setExitDirection] = useState<'left' | 'right' | null>(null);
  const rafRef = useRef<number>(0);

  const SWIPE_THRESHOLD = 80;
  const VELOCITY_THRESHOLD = 0.5;
  const MAX_ROTATION = 15;

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
    const stiffness = 0.15;
    const damping = 0.75;

    const step = () => {
      const force = -x * stiffness;
      velocity = (velocity + force) * damping;
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
    setExitDirection(direction);

    const targetX = direction === 'right' ? window.innerWidth * 1.5 : -window.innerWidth * 1.5;
    let x = state.currentX;
    const speed = Math.max(Math.abs(state.velocityX) * 0.5, 15);
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
        setExitDirection(null);
        setVisual({ x: 0, rotation: 0, opacity: 1 });
        state.currentX = 0;
        onSwipe(direction);
      }
    };

    rafRef.current = requestAnimationFrame(animate);
  }, [onSwipe, updateVisual]);

  const handleStart = useCallback((clientX: number, clientY: number) => {
    const state = dragState.current;
    if (state.animating) return;
    
    state.isDragging = true;
    state.startX = clientX;
    state.startY = clientY;
    state.lastX = clientX;
    state.lastTime = Date.now();
    state.velocityX = 0;
    setIsDragging(true);
  }, []);

  const handleMove = useCallback((clientX: number) => {
    const state = dragState.current;
    if (!state.isDragging) return;

    const now = Date.now();
    const dt = now - state.lastTime;
    if (dt > 0) {
      state.velocityX = (clientX - state.lastX) / dt;
    }
    state.lastX = clientX;
    state.lastTime = now;

    const deltaX = clientX - state.startX;
    state.currentX = deltaX;
    updateVisual(deltaX);
  }, [updateVisual]);

  const handleEnd = useCallback(() => {
    const state = dragState.current;
    if (!state.isDragging) return;

    state.isDragging = false;
    setIsDragging(false);

    const absDelta = Math.abs(state.currentX);
    const absVelocity = Math.abs(state.velocityX);
    const direction = state.currentX > 0 ? 'right' : 'left';

    // Swipe if past threshold OR fast enough flick in one direction
    if (absDelta > SWIPE_THRESHOLD || (absVelocity > VELOCITY_THRESHOLD && absDelta > 30)) {
      animateExit(direction as 'left' | 'right');
    } else {
      animateSpringBack();
    }
  }, [animateExit, animateSpringBack]);

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
    const touch = e.touches[0];
    handleStart(touch.clientX, touch.clientY);
  }, [handleStart]);

  const onTouchMove = useCallback((e: React.TouchEvent) => {
    const touch = e.touches[0];
    handleMove(touch.clientX);
  }, [handleMove]);

  const onTouchEnd = useCallback(() => {
    handleEnd();
  }, [handleEnd]);

  // Cleanup RAF on unmount
  useEffect(() => {
    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, []);

  const getEnergyColor = (energy: string) => {
    switch (energy) {
      case 'low': return 'bg-green-100 text-green-800';
      case 'medium': return 'bg-yellow-100 text-yellow-800';
      case 'high': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getLocationIcon = (location: string) => {
    switch (location) {
      case 'indoor': return '🏠';
      case 'outdoor': return '🌳';
      case 'either': return '🏠🌳';
      default: return '📍';
    }
  };

  const swipeProgress = Math.abs(visual.x) / SWIPE_THRESHOLD;

  return (
    <div
      ref={cardRef}
      className="relative w-80 h-96 bg-white rounded-2xl shadow-lg select-none touch-none"
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
      {/* Swipe indicators — fade in based on drag distance */}
      <div
        className="absolute top-4 left-4 px-4 py-2 rounded-full font-bold text-sm bg-red-500 text-white border-2 border-red-400 z-10"
        style={{ opacity: visual.x < -20 ? Math.min((-visual.x - 20) / 60, 1) : 0 }}
      >
        ✗ PASS
      </div>
      <div
        className="absolute top-4 right-4 px-4 py-2 rounded-full font-bold text-sm bg-green-500 text-white border-2 border-green-400 z-10"
        style={{ opacity: visual.x > 20 ? Math.min((visual.x - 20) / 60, 1) : 0 }}
      >
        LIKE ♥
      </div>

      {/* Status indicators */}
      {!isDragging && (
        <div className="absolute top-4 right-4 flex gap-2 z-10">
          {isFavorite && <span className="text-2xl">❤️</span>}
          {isDone && <span className="text-2xl">✅</span>}
          {activity.isPremium && <span className="text-2xl">⭐</span>}
        </div>
      )}

      <div className="p-6 h-full flex flex-col">
        {/* Header */}
        <div className="mb-4">
          <h2 className="text-2xl font-bold text-gray-800 mb-2">
            {activity.title}
          </h2>
          <p className="text-gray-600 text-sm leading-relaxed">
            {activity.description}
          </p>
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-4">
          <span className={`px-2 py-1 rounded-full text-xs font-medium ${getEnergyColor(activity.energy)}`}>
            {activity.energy} energy
          </span>
          <span className="px-2 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
            {getLocationIcon(activity.location)} {activity.location}
          </span>
          <span className="px-2 py-1 rounded-full text-xs font-medium bg-purple-100 text-purple-800">
            {activity.duration}min
          </span>
        </div>

        {/* Age groups */}
        <div className="mb-4">
          <span className="text-sm font-medium text-gray-700">Ages: </span>
          <span className="text-sm text-gray-600">
            {activity.ageGroups.join(', ')}
          </span>
        </div>

        {/* Supplies */}
        <div className="mb-4 flex-1">
          <span className="text-sm font-medium text-gray-700">Supplies: </span>
          {activity.suppliesNeeded.length === 0 ? (
            <span className="text-sm text-green-600 font-medium">None needed! 🎉</span>
          ) : (
            <span className="text-sm text-gray-600">
              {activity.suppliesNeeded.join(', ')}
            </span>
          )}
        </div>

        {/* Quick instructions preview */}
        <div className="mt-auto">
          <div className="text-xs text-gray-500 bg-gray-50 rounded-lg p-3">
            <strong>Quick start:</strong> {activity.instructions[0]}
            {activity.instructions.length > 1 && ' ...'}
          </div>
        </div>

        {/* Prep time */}
        <div className="mt-3 text-center">
          <span className="text-xs text-gray-400">
            ⚡ {activity.prepTime} min prep
          </span>
        </div>
      </div>
    </div>
  );
}
