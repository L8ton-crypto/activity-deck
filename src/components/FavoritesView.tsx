'use client';

import { Activity } from '@/types';

interface FavoritesViewProps {
  activities: Activity[];
  doneToday: string[];
  onRemoveFavorite: (id: string) => void;
  onViewDetail: (activity: Activity) => void;
}

const energyConfig = {
  low: { color: 'bg-emerald-100 text-emerald-700', emoji: '🧘' },
  medium: { color: 'bg-amber-100 text-amber-700', emoji: '🏃' },
  high: { color: 'bg-rose-100 text-rose-700', emoji: '🔥' },
};

const locationEmoji = {
  indoor: '🏠',
  outdoor: '🌳',
  either: '🏠🌳',
};

export function FavoritesView({ activities, doneToday, onRemoveFavorite, onViewDetail }: FavoritesViewProps) {
  if (activities.length === 0) {
    return (
      <div className="px-4 text-center py-20">
        <div className="text-6xl mb-4">💫</div>
        <h2 className="text-xl font-bold text-white mb-2">No favourites yet</h2>
        <p className="text-white/60">Swipe right on activities to save them here</p>
      </div>
    );
  }

  return (
    <div className="px-4 pb-6">
      <div className="space-y-3">
        {activities.map(activity => {
          const ec = energyConfig[activity.energy];
          const isDone = doneToday.includes(activity.id);
          return (
            <div
              key={activity.id}
              className="bg-white/95 backdrop-blur-sm rounded-2xl p-4 shadow-sm"
            >
              <div className="flex items-start justify-between gap-3">
                <div className="flex-1 min-w-0" onClick={() => onViewDetail(activity)} role="button">
                  <h3 className="font-bold text-gray-900 text-base mb-1">{activity.title}</h3>
                  <p className="text-gray-500 text-sm line-clamp-2 mb-2">{activity.description}</p>
                  <div className="flex flex-wrap gap-1.5">
                    <span className={`px-2 py-0.5 rounded-full text-[11px] font-semibold ${ec.color}`}>
                      {ec.emoji} {activity.energy}
                    </span>
                    <span className="px-2 py-0.5 rounded-full text-[11px] font-semibold bg-blue-100 text-blue-700">
                      {locationEmoji[activity.location]} {activity.location}
                    </span>
                    <span className="px-2 py-0.5 rounded-full text-[11px] font-semibold bg-purple-100 text-purple-700">
                      ⏱ {activity.duration}min
                    </span>
                    {isDone && (
                      <span className="px-2 py-0.5 rounded-full text-[11px] font-semibold bg-green-100 text-green-700">
                        ✅ Done
                      </span>
                    )}
                  </div>
                </div>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    onRemoveFavorite(activity.id);
                  }}
                  className="w-9 h-9 flex items-center justify-center rounded-full bg-red-50 hover:bg-red-100 transition-colors flex-shrink-0"
                  aria-label="Remove from favourites"
                >
                  <span className="text-sm">🗑️</span>
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
