'use client';

import { useState, useRef } from 'react';
import { Activity } from '@/types';

interface ActivityCardProps {
  activity: Activity;
  onSwipe: (direction: 'left' | 'right') => void;
  isFavorite: boolean;
  isDone: boolean;
}

export function ActivityCard({ activity, onSwipe, isFavorite, isDone }: ActivityCardProps) {
  const [dragStart, setDragStart] = useState<{ x: number; y: number } | null>(null);
  const [currentTransform, setCurrentTransform] = useState({ x: 0, rotation: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  const handleMouseDown = (e: React.MouseEvent) => {
    setDragStart({ x: e.clientX, y: e.clientY });
    setIsDragging(true);
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    const touch = e.touches[0];
    setDragStart({ x: touch.clientX, y: touch.clientY });
    setIsDragging(true);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!dragStart || !isDragging) return;
    
    const deltaX = e.clientX - dragStart.x;
    const rotation = deltaX * 0.1; // Subtle rotation
    
    setCurrentTransform({ x: deltaX, rotation });
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!dragStart || !isDragging) return;
    
    const touch = e.touches[0];
    const deltaX = touch.clientX - dragStart.x;
    const rotation = deltaX * 0.1;
    
    setCurrentTransform({ x: deltaX, rotation });
  };

  const handleEnd = () => {
    if (!isDragging) return;
    
    const threshold = 100;
    
    if (Math.abs(currentTransform.x) > threshold) {
      const direction = currentTransform.x > 0 ? 'right' : 'left';
      onSwipe(direction);
    }
    
    // Reset position
    setCurrentTransform({ x: 0, rotation: 0 });
    setDragStart(null);
    setIsDragging(false);
  };

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

  return (
    <div
      ref={cardRef}
      className={`relative w-80 h-96 bg-white rounded-2xl shadow-lg cursor-grab active:cursor-grabbing transition-transform duration-200 ${
        isDragging ? '' : 'hover:scale-105'
      }`}
      style={{
        transform: `translateX(${currentTransform.x}px) rotate(${currentTransform.rotation}deg)`,
        opacity: isDragging && Math.abs(currentTransform.x) > 50 ? 0.8 : 1,
      }}
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleEnd}
      onMouseLeave={handleEnd}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleEnd}
    >
      {/* Swipe indicators */}
      {isDragging && (
        <>
          <div
            className={`absolute top-4 left-4 px-3 py-1 rounded-full font-bold transition-opacity ${
              currentTransform.x < -50 ? 'opacity-100 bg-red-500 text-white' : 'opacity-0'
            }`}
          >
            PASS
          </div>
          <div
            className={`absolute top-4 right-4 px-3 py-1 rounded-full font-bold transition-opacity ${
              currentTransform.x > 50 ? 'opacity-100 bg-green-500 text-white' : 'opacity-0'
            }`}
          >
            LIKE
          </div>
        </>
      )}

      {/* Status indicators */}
      <div className="absolute top-4 right-4 flex gap-2">
        {isFavorite && <span className="text-2xl">❤️</span>}
        {isDone && <span className="text-2xl">✅</span>}
        {activity.isPremium && <span className="text-2xl">⭐</span>}
      </div>

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