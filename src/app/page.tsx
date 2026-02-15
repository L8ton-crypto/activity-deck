'use client';

import { useState, useEffect, useCallback } from 'react';
import { ActivityCard } from '@/components/ActivityCard';
import { FilterPanel } from '@/components/FilterPanel';
import { ActionButtons } from '@/components/ActionButtons';
import { StatsPanel } from '@/components/StatsPanel';
import { FavoritesView } from '@/components/FavoritesView';
import { ActivityDetail } from '@/components/ActivityDetail';
import { activities } from '@/data/activities';
import { Activity, Filters } from '@/types';

type View = 'swipe' | 'favorites';

export default function Home() {
  const [filteredActivities, setFilteredActivities] = useState<Activity[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showFilters, setShowFilters] = useState(false);
  const [favorites, setFavorites] = useState<string[]>([]);
  const [doneToday, setDoneToday] = useState<string[]>([]);
  const [view, setView] = useState<View>('swipe');
  const [detailActivity, setDetailActivity] = useState<Activity | null>(null);
  const [filters, setFilters] = useState<Filters>({
    ageGroup: 'all',
    energy: 'all',
    location: 'all',
    prepTime: 60,
    supplies: 'all'
  });

  // Load from localStorage
  useEffect(() => {
    const savedFavorites = localStorage.getItem('ad-favorites');
    const savedDoneToday = localStorage.getItem('ad-done-today');
    const savedDate = localStorage.getItem('ad-done-date');

    if (savedFavorites) setFavorites(JSON.parse(savedFavorites));

    const today = new Date().toDateString();
    if (savedDate === today && savedDoneToday) {
      setDoneToday(JSON.parse(savedDoneToday));
    } else {
      localStorage.setItem('ad-done-date', today);
      localStorage.removeItem('ad-done-today');
    }
  }, []);

  // Filter and shuffle
  useEffect(() => {
    let filtered = [...activities];

    if (filters.ageGroup !== 'all') {
      filtered = filtered.filter(a => a.ageGroups.includes(filters.ageGroup as any));
    }
    if (filters.energy !== 'all') {
      filtered = filtered.filter(a => a.energy === filters.energy);
    }
    if (filters.location !== 'all') {
      filtered = filtered.filter(a => a.location === filters.location || a.location === 'either');
    }
    if (filters.prepTime < 60) {
      filtered = filtered.filter(a => a.prepTime <= filters.prepTime);
    }
    if (filters.supplies === 'none') {
      filtered = filtered.filter(a => a.suppliesNeeded.length === 0);
    } else if (filters.supplies === 'simple') {
      filtered = filtered.filter(a => a.suppliesNeeded.length <= 3);
    }

    // Shuffle
    for (let i = filtered.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [filtered[i], filtered[j]] = [filtered[j], filtered[i]];
    }

    setFilteredActivities(filtered);
    setCurrentIndex(0);
  }, [filters]);

  const currentActivity = filteredActivities[currentIndex];

  const goNext = useCallback(() => {
    if (currentIndex < filteredActivities.length - 1) {
      setCurrentIndex(i => i + 1);
    } else {
      // Reshuffle
      const shuffled = [...filteredActivities];
      for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
      }
      setFilteredActivities(shuffled);
      setCurrentIndex(0);
    }
  }, [currentIndex, filteredActivities]);

  const handleSwipe = useCallback((direction: 'left' | 'right') => {
    if (direction === 'right' && currentActivity) {
      // Add to favorites
      setFavorites(prev => {
        if (prev.includes(currentActivity.id)) return prev;
        const next = [...prev, currentActivity.id];
        localStorage.setItem('ad-favorites', JSON.stringify(next));
        return next;
      });
    }
    goNext();
  }, [currentActivity, goNext]);

  const markAsDone = useCallback(() => {
    if (!currentActivity) return;
    setDoneToday(prev => {
      const next = [...prev, currentActivity.id];
      localStorage.setItem('ad-done-today', JSON.stringify(next));
      return next;
    });
    goNext();
  }, [currentActivity, goNext]);

  const toggleFavorite = useCallback((activityId?: string) => {
    const id = activityId || currentActivity?.id;
    if (!id) return;
    setFavorites(prev => {
      const next = prev.includes(id) ? prev.filter(f => f !== id) : [...prev, id];
      localStorage.setItem('ad-favorites', JSON.stringify(next));
      return next;
    });
  }, [currentActivity]);

  const favoriteActivities = activities.filter(a => favorites.includes(a.id));

  return (
    <div className="min-h-screen bg-gradient-to-br from-violet-600 via-purple-500 to-fuchsia-500">
      {/* Header */}
      <header className="px-4 pt-4 pb-2 flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold text-white tracking-tight">ActivityDeck</h1>
          <p className="text-xs text-white/60">{filteredActivities.length} activities</p>
        </div>
        <button
          onClick={() => setShowFilters(true)}
          className="w-10 h-10 flex items-center justify-center bg-white/15 hover:bg-white/25 rounded-xl backdrop-blur-sm transition-colors"
          aria-label="Open filters"
        >
          <span className="text-lg">🎛️</span>
        </button>
      </header>

      {/* Tab Bar */}
      <div className="px-4 pb-3">
        <div className="flex bg-white/10 backdrop-blur-sm rounded-xl p-1">
          <button
            onClick={() => setView('swipe')}
            className={`flex-1 py-2 rounded-lg text-sm font-semibold transition-all ${
              view === 'swipe'
                ? 'bg-white text-purple-700 shadow-sm'
                : 'text-white/70 hover:text-white'
            }`}
          >
            🃏 Discover
          </button>
          <button
            onClick={() => setView('favorites')}
            className={`flex-1 py-2 rounded-lg text-sm font-semibold transition-all ${
              view === 'favorites'
                ? 'bg-white text-purple-700 shadow-sm'
                : 'text-white/70 hover:text-white'
            }`}
          >
            ❤️ Favourites ({favorites.length})
          </button>
        </div>
      </div>

      {view === 'swipe' ? (
        <div className="px-4 pb-6">
          {/* Stats */}
          <StatsPanel
            favorites={favorites.length}
            doneToday={doneToday.length}
            totalActivities={filteredActivities.length}
          />

          {/* Card */}
          {currentActivity ? (
            <>
              <div className="flex justify-center mb-4">
                <ActivityCard
                  activity={currentActivity}
                  onSwipe={handleSwipe}
                  isFavorite={favorites.includes(currentActivity.id)}
                  isDone={doneToday.includes(currentActivity.id)}
                  onTap={() => setDetailActivity(currentActivity)}
                />
              </div>

              <ActionButtons
                onPass={() => handleSwipe('left')}
                onLike={() => handleSwipe('right')}
                onDone={markAsDone}
                onToggleFavorite={() => toggleFavorite()}
                isFavorite={favorites.includes(currentActivity.id)}
                isDone={doneToday.includes(currentActivity.id)}
              />

              <p className="text-center text-white/40 text-xs mt-4">
                Swipe right to like, left to skip - or tap for details
              </p>
            </>
          ) : (
            <div className="text-center py-20">
              <div className="text-6xl mb-4">🎭</div>
              <h2 className="text-xl font-bold text-white mb-2">No activities match!</h2>
              <p className="text-white/60 mb-6">Try adjusting your filters</p>
              <button
                onClick={() => setShowFilters(true)}
                className="px-6 py-3 bg-white/20 hover:bg-white/30 text-white rounded-xl font-medium transition-colors"
              >
                Open Filters
              </button>
            </div>
          )}
        </div>
      ) : (
        <FavoritesView
          activities={favoriteActivities}
          doneToday={doneToday}
          onRemoveFavorite={(id) => toggleFavorite(id)}
          onViewDetail={(a) => setDetailActivity(a)}
        />
      )}

      {/* Filter Panel */}
      {showFilters && (
        <FilterPanel
          filters={filters}
          onFiltersChange={setFilters}
          onClose={() => setShowFilters(false)}
        />
      )}

      {/* Detail Modal */}
      {detailActivity && (
        <ActivityDetail
          activity={detailActivity}
          isFavorite={favorites.includes(detailActivity.id)}
          isDone={doneToday.includes(detailActivity.id)}
          onToggleFavorite={() => toggleFavorite(detailActivity.id)}
          onClose={() => setDetailActivity(null)}
        />
      )}
    </div>
  );
}
