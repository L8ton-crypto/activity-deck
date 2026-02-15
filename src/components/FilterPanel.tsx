'use client';

import { Filters } from '@/types';

interface FilterPanelProps {
  filters: Filters;
  onFiltersChange: (filters: Filters) => void;
  onClose: () => void;
}

export function FilterPanel({ filters, onFiltersChange, onClose }: FilterPanelProps) {
  const updateFilter = (key: keyof Filters, value: string | number) => {
    onFiltersChange({ ...filters, [key]: value });
  };

  const resetFilters = () => {
    onFiltersChange({
      ageGroup: 'all',
      energy: 'all',
      location: 'all',
      prepTime: 60,
      supplies: 'all',
    });
  };

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-end" onClick={onClose}>
      <div className="w-full bg-white rounded-t-3xl max-h-[85vh] overflow-y-auto" onClick={e => e.stopPropagation()}>
        <div className="p-5">
          {/* Handle bar */}
          <div className="w-10 h-1 bg-gray-300 rounded-full mx-auto mb-4" />

          {/* Header */}
          <div className="flex justify-between items-center mb-5">
            <h2 className="text-xl font-bold text-gray-900">Filters</h2>
            <button onClick={resetFilters} className="text-sm text-purple-600 font-medium hover:text-purple-800">
              Reset All
            </button>
          </div>

          {/* Age Group */}
          <div className="mb-5">
            <label className="block text-sm font-semibold text-gray-700 mb-2">Age Group</label>
            <div className="grid grid-cols-4 gap-2">
              {(['all', '2-4', '5-7', '8-10'] as const).map(age => (
                <button
                  key={age}
                  onClick={() => updateFilter('ageGroup', age)}
                  className={`py-2.5 rounded-xl border-2 text-center text-sm font-medium transition-all ${
                    filters.ageGroup === age
                      ? 'border-purple-500 bg-purple-50 text-purple-700'
                      : 'border-gray-200 text-gray-500 hover:border-purple-300'
                  }`}
                >
                  {age === 'all' ? 'All' : age}
                </button>
              ))}
            </div>
          </div>

          {/* Energy Level */}
          <div className="mb-5">
            <label className="block text-sm font-semibold text-gray-700 mb-2">Energy Level</label>
            <div className="grid grid-cols-4 gap-2">
              {[
                { key: 'all', label: 'Any', emoji: '' },
                { key: 'low', label: 'Low', emoji: '🧘' },
                { key: 'medium', label: 'Med', emoji: '🏃' },
                { key: 'high', label: 'High', emoji: '🔥' },
              ].map(({ key, label, emoji }) => (
                <button
                  key={key}
                  onClick={() => updateFilter('energy', key)}
                  className={`py-2.5 rounded-xl border-2 text-center text-sm font-medium transition-all ${
                    filters.energy === key
                      ? 'border-purple-500 bg-purple-50 text-purple-700'
                      : 'border-gray-200 text-gray-500 hover:border-purple-300'
                  }`}
                >
                  {emoji} {label}
                </button>
              ))}
            </div>
          </div>

          {/* Location */}
          <div className="mb-5">
            <label className="block text-sm font-semibold text-gray-700 mb-2">Location</label>
            <div className="grid grid-cols-3 gap-2">
              {[
                { key: 'all', label: 'Anywhere' },
                { key: 'indoor', label: '🏠 Indoor' },
                { key: 'outdoor', label: '🌳 Outdoor' },
              ].map(({ key, label }) => (
                <button
                  key={key}
                  onClick={() => updateFilter('location', key)}
                  className={`py-2.5 rounded-xl border-2 text-center text-sm font-medium transition-all ${
                    filters.location === key
                      ? 'border-purple-500 bg-purple-50 text-purple-700'
                      : 'border-gray-200 text-gray-500 hover:border-purple-300'
                  }`}
                >
                  {label}
                </button>
              ))}
            </div>
          </div>

          {/* Prep Time */}
          <div className="mb-5">
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Max Prep Time: {filters.prepTime >= 60 ? 'Any' : `${filters.prepTime}min`}
            </label>
            <input
              type="range"
              min="0"
              max="60"
              step="5"
              value={filters.prepTime}
              onChange={e => updateFilter('prepTime', parseInt(e.target.value))}
              className="w-full"
            />
            <div className="flex justify-between text-xs text-gray-400 mt-1">
              <span>0min</span>
              <span>15min</span>
              <span>30min</span>
              <span>Any</span>
            </div>
          </div>

          {/* Supplies */}
          <div className="mb-6">
            <label className="block text-sm font-semibold text-gray-700 mb-2">Supplies Needed</label>
            <div className="space-y-2">
              {[
                { key: 'all', label: 'Any supplies fine' },
                { key: 'none', label: '🎉 No supplies needed' },
                { key: 'simple', label: '✨ Simple only (3 items or less)' },
              ].map(({ key, label }) => (
                <button
                  key={key}
                  onClick={() => updateFilter('supplies', key)}
                  className={`w-full py-3 rounded-xl border-2 text-left px-4 text-sm font-medium transition-all ${
                    filters.supplies === key
                      ? 'border-purple-500 bg-purple-50 text-purple-700'
                      : 'border-gray-200 text-gray-500 hover:border-purple-300'
                  }`}
                >
                  {label}
                </button>
              ))}
            </div>
          </div>

          {/* Apply */}
          <button
            onClick={onClose}
            className="w-full bg-gradient-to-r from-purple-600 to-fuchsia-600 text-white font-bold py-3.5 rounded-2xl hover:shadow-lg transition-all"
          >
            Show Activities
          </button>
        </div>
      </div>
    </div>
  );
}
