'use client';

import { useState, useEffect } from 'react';
import { ActivityCard } from '@/components/ActivityCard';
import { FilterPanel } from '@/components/FilterPanel';
import { ActionButtons } from '@/components/ActionButtons';
import { StatsPanel } from '@/components/StatsPanel';
import { activities, Activity } from '@/data/activities';
import { AgeGroup, Energy, Location, Filters } from '@/types';

export default function Home() {
  const [currentActivities, setCurrentActivities] = useState<Activity[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showFilters, setShowFilters] = useState(false);
  const [favorites, setFavorites] = useState<string[]>([]);
  const [doneToday, setDoneToday] = useState<string[]>([]);
  const [filters, setFilters] = useState<Filters>({
    ageGroup: 'all',
    energy: 'all',
    location: 'all',
    prepTime: 60,
    supplies: 'all'
  });

  // Load data from localStorage
  useEffect(() => {
    const savedFavorites = localStorage.getItem('activity-favorites');
    const savedDoneToday = localStorage.getItem('activity-done-today');
    const savedDate = localStorage.getItem('activity-done-date');
    
    if (savedFavorites) {
      setFavorites(JSON.parse(savedFavorites));
    }
    
    // Reset done today if it's a new day
    const today = new Date().toDateString();
    if (savedDate === today && savedDoneToday) {
      setDoneToday(JSON.parse(savedDoneToday));
    } else {
      localStorage.setItem('activity-done-date', today);
      localStorage.removeItem('activity-done-today');
    }
  }, []);

  // Filter activities based on current filters
  useEffect(() => {
    let filtered = [...activities];
    
    if (filters.ageGroup !== 'all') {
      filtered = filtered.filter(activity => 
        activity.ageGroups.includes(filters.ageGroup as AgeGroup)
      );
    }
    
    if (filters.energy !== 'all') {
      filtered = filtered.filter(activity => activity.energy === filters.energy);
    }
    
    if (filters.location !== 'all') {
      filtered = filtered.filter(activity => activity.location === filters.location);
    }
    
    if (filters.prepTime < 60) {
      filtered = filtered.filter(activity => activity.prepTime <= filters.prepTime);
    }
    
    if (filters.supplies !== 'all') {
      if (filters.supplies === 'none') {
        filtered = filtered.filter(activity => activity.suppliesNeeded.length === 0);
      } else if (filters.supplies === 'simple') {
        filtered = filtered.filter(activity => activity.suppliesNeeded.length <= 3);
      }
    }

    // Shuffle for variety
    const shuffled = filtered.sort(() => Math.random() - 0.5);
    setCurrentActivities(shuffled);
    setCurrentIndex(0);
  }, [filters]);

  const currentActivity = currentActivities[currentIndex];

  const handleSwipe = (direction: 'left' | 'right') => {
    if (direction === 'right') {
      // Like - add to favorites
      const newFavorites = [...favorites, currentActivity.id];
      setFavorites(newFavorites);
      localStorage.setItem('activity-favorites', JSON.stringify(newFavorites));
    }
    
    // Move to next activity
    if (currentIndex < currentActivities.length - 1) {
      setCurrentIndex(currentIndex + 1);
    } else {
      // Reshuffle when we reach the end
      const shuffled = currentActivities.sort(() => Math.random() - 0.5);
      setCurrentActivities(shuffled);
      setCurrentIndex(0);
    }
  };

  const markAsDone = () => {
    const newDoneToday = [...doneToday, currentActivity.id];
    setDoneToday(newDoneToday);
    localStorage.setItem('activity-done-today', JSON.stringify(newDoneToday));
    handleSwipe('right'); // Move to next after marking done
  };

  const toggleFavorite = () => {
    const isFavorite = favorites.includes(currentActivity.id);
    let newFavorites;
    
    if (isFavorite) {
      newFavorites = favorites.filter(id => id !== currentActivity.id);
    } else {
      newFavorites = [...favorites, currentActivity.id];
    }
    
    setFavorites(newFavorites);
    localStorage.setItem('activity-favorites', JSON.stringify(newFavorites));
  };

  if (!currentActivity) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-purple-400 via-pink-400 to-orange-400 flex items-center justify-center">
        <div className="text-white text-center">
          <h2 className="text-2xl font-bold mb-4">No activities found!</h2>
          <p>Try adjusting your filters</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-400 via-pink-400 to-orange-400">
      {/* Header */}
      <header className="p-4 flex justify-between items-center text-white">
        <h1 className="text-2xl font-bold">ActivityDeck</h1>
        <button
          onClick={() => setShowFilters(true)}
          className="p-2 bg-white/20 rounded-full backdrop-blur-sm"
        >
          🔧
        </button>
      </header>

      {/* Main Content */}
      <div className="px-4 pb-6">
        {/* Stats */}
        <StatsPanel 
          favorites={favorites}
          doneToday={doneToday}
          totalActivities={currentActivities.length}
        />

        {/* Activity Card */}
        <div className="flex justify-center mb-6">
          <ActivityCard
            activity={currentActivity}
            onSwipe={handleSwipe}
            isFavorite={favorites.includes(currentActivity.id)}
            isDone={doneToday.includes(currentActivity.id)}
          />
        </div>

        {/* Action Buttons */}
        <ActionButtons
          onPass={() => handleSwipe('left')}
          onLike={() => handleSwipe('right')}
          onDone={markAsDone}
          onToggleFavorite={toggleFavorite}
          isFavorite={favorites.includes(currentActivity.id)}
          isDone={doneToday.includes(currentActivity.id)}
        />
      </div>

      {/* Filter Panel */}
      {showFilters && (
        <FilterPanel
          filters={filters}
          onFiltersChange={setFilters}
          onClose={() => setShowFilters(false)}
        />
      )}
    </div>
  );
}