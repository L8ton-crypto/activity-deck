'use client';

interface StatsPanelProps {
  favorites: string[];
  doneToday: string[];
  totalActivities: number;
}

export function StatsPanel({ favorites, doneToday, totalActivities }: StatsPanelProps) {
  return (
    <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 mb-6 text-white">
      <div className="grid grid-cols-3 gap-4 text-center">
        <div>
          <div className="text-2xl font-bold">{favorites.length}</div>
          <div className="text-sm opacity-80">❤️ Favorites</div>
        </div>
        <div>
          <div className="text-2xl font-bold">{doneToday.length}</div>
          <div className="text-sm opacity-80">✅ Done Today</div>
        </div>
        <div>
          <div className="text-2xl font-bold">{totalActivities}</div>
          <div className="text-sm opacity-80">🎯 Available</div>
        </div>
      </div>
    </div>
  );
}