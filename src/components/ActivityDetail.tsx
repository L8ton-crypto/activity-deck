'use client';

import { Activity } from '@/types';

interface ActivityDetailProps {
  activity: Activity;
  isFavorite: boolean;
  isDone: boolean;
  onToggleFavorite: () => void;
  onClose: () => void;
}

const energyConfig = {
  low: { color: 'bg-emerald-100 text-emerald-700', emoji: '🧘', label: 'Low Energy' },
  medium: { color: 'bg-amber-100 text-amber-700', emoji: '🏃', label: 'Medium Energy' },
  high: { color: 'bg-rose-100 text-rose-700', emoji: '🔥', label: 'High Energy' },
};

const locationConfig = {
  indoor: { emoji: '🏠', label: 'Indoor' },
  outdoor: { emoji: '🌳', label: 'Outdoor' },
  either: { emoji: '🏠🌳', label: 'Indoor or Outdoor' },
};

export function ActivityDetail({ activity, isFavorite, isDone, onToggleFavorite, onClose }: ActivityDetailProps) {
  const ec = energyConfig[activity.energy];
  const lc = locationConfig[activity.location];

  return (
    <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-end sm:items-center justify-center">
      <div
        className="w-full sm:max-w-md bg-white rounded-t-3xl sm:rounded-3xl max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="sticky top-0 bg-white rounded-t-3xl sm:rounded-t-3xl px-5 pt-4 pb-3 border-b border-gray-100 flex items-center justify-between z-10">
          <h2 className="text-lg font-bold text-gray-900 flex-1 mr-3">{activity.title}</h2>
          <div className="flex gap-2">
            <button
              onClick={onToggleFavorite}
              className={`w-9 h-9 rounded-full flex items-center justify-center transition-colors ${
                isFavorite ? 'bg-pink-100' : 'bg-gray-100 hover:bg-pink-50'
              }`}
            >
              {isFavorite ? '❤️' : '🤍'}
            </button>
            <button
              onClick={onClose}
              className="w-9 h-9 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center transition-colors text-gray-500 font-bold"
            >
              ✕
            </button>
          </div>
        </div>

        <div className="px-5 py-4 space-y-5">
          {/* Description */}
          <p className="text-gray-600 leading-relaxed">{activity.description}</p>

          {/* Info Grid */}
          <div className="grid grid-cols-2 gap-3">
            <div className="bg-gray-50 rounded-xl p-3">
              <p className="text-[11px] text-gray-400 font-semibold uppercase tracking-wider mb-1">Energy</p>
              <p className={`inline-block px-2.5 py-1 rounded-full text-xs font-semibold ${ec.color}`}>
                {ec.emoji} {ec.label}
              </p>
            </div>
            <div className="bg-gray-50 rounded-xl p-3">
              <p className="text-[11px] text-gray-400 font-semibold uppercase tracking-wider mb-1">Location</p>
              <p className="text-sm text-gray-700 font-medium">{lc.emoji} {lc.label}</p>
            </div>
            <div className="bg-gray-50 rounded-xl p-3">
              <p className="text-[11px] text-gray-400 font-semibold uppercase tracking-wider mb-1">Duration</p>
              <p className="text-sm text-gray-700 font-medium">⏱ {activity.duration} minutes</p>
            </div>
            <div className="bg-gray-50 rounded-xl p-3">
              <p className="text-[11px] text-gray-400 font-semibold uppercase tracking-wider mb-1">Prep Time</p>
              <p className="text-sm text-gray-700 font-medium">⚡ {activity.prepTime} minutes</p>
            </div>
          </div>

          {/* Ages */}
          <div>
            <p className="text-xs text-gray-400 font-semibold uppercase tracking-wider mb-2">Suitable Ages</p>
            <div className="flex gap-2">
              {activity.ageGroups.map(ag => (
                <span key={ag} className="px-3 py-1.5 bg-purple-50 text-purple-700 rounded-lg text-sm font-medium">
                  {ag} years
                </span>
              ))}
            </div>
          </div>

          {/* Supplies */}
          <div>
            <p className="text-xs text-gray-400 font-semibold uppercase tracking-wider mb-2">What You Need</p>
            {activity.suppliesNeeded.length === 0 ? (
              <p className="text-emerald-600 font-medium">Nothing needed - just show up! 🎉</p>
            ) : (
              <div className="flex flex-wrap gap-2">
                {activity.suppliesNeeded.map((s, i) => (
                  <span key={i} className="px-3 py-1.5 bg-gray-100 text-gray-700 rounded-lg text-sm">
                    {s}
                  </span>
                ))}
              </div>
            )}
          </div>

          {/* Instructions */}
          <div>
            <p className="text-xs text-gray-400 font-semibold uppercase tracking-wider mb-2">How To Do It</p>
            <ol className="space-y-2">
              {activity.instructions.map((step, i) => (
                <li key={i} className="flex gap-3">
                  <span className="w-6 h-6 rounded-full bg-purple-100 text-purple-700 flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5">
                    {i + 1}
                  </span>
                  <span className="text-gray-700 text-sm leading-relaxed">{step}</span>
                </li>
              ))}
            </ol>
          </div>

          {/* Tags */}
          {activity.tags.length > 0 && (
            <div>
              <p className="text-xs text-gray-400 font-semibold uppercase tracking-wider mb-2">Tags</p>
              <div className="flex flex-wrap gap-1.5">
                {activity.tags.map(tag => (
                  <span key={tag} className="px-2.5 py-1 bg-gray-100 text-gray-500 rounded-full text-xs">
                    #{tag}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Status */}
          {isDone && (
            <div className="bg-green-50 border border-green-200 rounded-xl p-3 text-center">
              <p className="text-green-700 font-medium">✅ Completed today!</p>
            </div>
          )}
        </div>

        {/* Sticky footer */}
        <div className="sticky bottom-0 bg-white px-5 py-4 border-t border-gray-100">
          <button
            onClick={onClose}
            className="w-full py-3 bg-gradient-to-r from-purple-600 to-fuchsia-600 text-white font-bold rounded-xl hover:shadow-lg transition-all"
          >
            Back to Deck
          </button>
        </div>
      </div>
    </div>
  );
}
