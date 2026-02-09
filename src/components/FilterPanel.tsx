'use client';

import { AgeGroup, Energy, Location, Filters } from '@/types';

interface FilterPanelProps {
  filters: Filters;
  onFiltersChange: (filters: Filters) => void;
  onClose: () => void;
}

export function FilterPanel({ filters, onFiltersChange, onClose }: FilterPanelProps) {
  const updateFilter = (key: keyof Filters, value: any) => {
    onFiltersChange({ ...filters, [key]: value });
  };

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-end">
      <div className="w-full bg-white rounded-t-3xl max-h-[80vh] overflow-y-auto">
        <div className="p-6">
          {/* Header */}
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold text-gray-800">Filters</h2>
            <button
              onClick={onClose}
              className="p-2 hover:bg-gray-100 rounded-full transition-colors"
            >
              ✕
            </button>
          </div>

          {/* Age Group */}
          <div className="mb-6">
            <label className="block text-lg font-semibold text-gray-700 mb-3">
              Age Group
            </label>
            <div className="grid grid-cols-3 gap-2">
              {(['all', '2-4', '5-7', '8-10'] as const).map((age) => (
                <button
                  key={age}
                  onClick={() => updateFilter('ageGroup', age)}
                  className={`p-3 rounded-xl border-2 text-center font-medium transition-colors ${
                    filters.ageGroup === age
                      ? 'border-purple-500 bg-purple-50 text-purple-700'
                      : 'border-gray-200 text-gray-600 hover:border-purple-300'
                  }`}
                >
                  {age === 'all' ? 'All Ages' : `${age} years`}
                </button>
              ))}
            </div>
          </div>

          {/* Energy Level */}
          <div className="mb-6">
            <label className="block text-lg font-semibold text-gray-700 mb-3">
              Energy Level
            </label>
            <div className="grid grid-cols-2 gap-2">
              {(['all', 'low', 'medium', 'high'] as const).map((energy) => (
                <button
                  key={energy}
                  onClick={() => updateFilter('energy', energy)}
                  className={`p-3 rounded-xl border-2 text-center font-medium transition-colors ${
                    filters.energy === energy
                      ? 'border-purple-500 bg-purple-50 text-purple-700'
                      : 'border-gray-200 text-gray-600 hover:border-purple-300'
                  }`}
                >
                  {energy === 'all' ? 'Any Energy' : `${energy.charAt(0).toUpperCase()}${energy.slice(1)} Energy`}
                </button>
              ))}
            </div>
          </div>

          {/* Location */}
          <div className="mb-6">
            <label className="block text-lg font-semibold text-gray-700 mb-3">
              Location
            </label>
            <div className="grid grid-cols-2 gap-2">
              {(['all', 'indoor', 'outdoor', 'either'] as const).map((location) => (
                <button
                  key={location}
                  onClick={() => updateFilter('location', location)}
                  className={`p-3 rounded-xl border-2 text-center font-medium transition-colors ${
                    filters.location === location
                      ? 'border-purple-500 bg-purple-50 text-purple-700'
                      : 'border-gray-200 text-gray-600 hover:border-purple-300'
                  }`}
                >
                  {location === 'all' ? 'Anywhere' : 
                   location === 'either' ? 'Indoor/Outdoor' :
                   location === 'indoor' ? '🏠 Indoor' : '🌳 Outdoor'}
                </button>
              ))}
            </div>
          </div>

          {/* Prep Time */}
          <div className="mb-6">
            <label className="block text-lg font-semibold text-gray-700 mb-3">
              Max Prep Time: {filters.prepTime === 60 ? '60+' : filters.prepTime} minutes
            </label>
            <div className="px-3">
              <input
                type="range"
                min="0"
                max="60"
                step="5"
                value={filters.prepTime}
                onChange={(e) => updateFilter('prepTime', parseInt(e.target.value))}
                className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer slider"
              />
              <div className="flex justify-between text-xs text-gray-500 mt-1">
                <span>0min</span>
                <span>15min</span>
                <span>30min</span>
                <span>60min+</span>
              </div>
            </div>
          </div>

          {/* Supplies Needed */}
          <div className="mb-6">
            <label className="block text-lg font-semibold text-gray-700 mb-3">
              Supplies Needed
            </label>
            <div className="grid grid-cols-1 gap-2">
              {(['all', 'none', 'simple'] as const).map((supplies) => (
                <button
                  key={supplies}
                  onClick={() => updateFilter('supplies', supplies)}
                  className={`p-3 rounded-xl border-2 text-center font-medium transition-colors ${
                    filters.supplies === supplies
                      ? 'border-purple-500 bg-purple-50 text-purple-700'
                      : 'border-gray-200 text-gray-600 hover:border-purple-300'
                  }`}
                >
                  {supplies === 'all' ? 'Any supplies are fine' :
                   supplies === 'none' ? '🎉 No supplies needed' :
                   '✨ Simple supplies only (≤3 items)'}
                </button>
              ))}
            </div>
          </div>

          {/* Apply Button */}
          <div className="pt-4">
            <button
              onClick={onClose}
              className="w-full bg-gradient-to-r from-purple-500 to-pink-500 text-white font-bold py-4 px-6 rounded-2xl hover:shadow-lg transition-all duration-200"
            >
              Apply Filters
            </button>
          </div>
        </div>
      </div>
      
      <style jsx>{`
        .slider::-webkit-slider-thumb {
          appearance: none;
          height: 20px;
          width: 20px;
          border-radius: 50%;
          background: #8b5cf6;
          cursor: pointer;
          border: 2px solid white;
          box-shadow: 0 2px 4px rgba(0,0,0,0.2);
        }
        
        .slider::-moz-range-thumb {
          height: 20px;
          width: 20px;
          border-radius: 50%;
          background: #8b5cf6;
          cursor: pointer;
          border: 2px solid white;
          box-shadow: 0 2px 4px rgba(0,0,0,0.2);
        }
      `}</style>
    </div>
  );
}