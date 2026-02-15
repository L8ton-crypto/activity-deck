'use client';

interface StatsPanelProps {
  favorites: number;
  doneToday: number;
  totalActivities: number;
}

export function StatsPanel({ favorites, doneToday, totalActivities }: StatsPanelProps) {
  return (
    <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-3 mb-4">
      <div className="grid grid-cols-3 gap-3 text-center">
        <div>
          <div className="text-xl font-bold text-white">{favorites}</div>
          <div className="text-[11px] text-white/60">❤️ Saved</div>
        </div>
        <div>
          <div className="text-xl font-bold text-white">{doneToday}</div>
          <div className="text-[11px] text-white/60">✅ Done Today</div>
        </div>
        <div>
          <div className="text-xl font-bold text-white">{totalActivities}</div>
          <div className="text-[11px] text-white/60">🎯 Available</div>
        </div>
      </div>
    </div>
  );
}
