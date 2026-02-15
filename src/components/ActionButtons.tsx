'use client';

interface ActionButtonsProps {
  onPass: () => void;
  onLike: () => void;
  onDone: () => void;
  onToggleFavorite: () => void;
  isFavorite: boolean;
  isDone: boolean;
}

export function ActionButtons({
  onPass,
  onLike,
  onDone,
  onToggleFavorite,
  isFavorite,
  isDone
}: ActionButtonsProps) {
  return (
    <div className="flex justify-center items-center gap-3">
      {/* Skip */}
      <button
        onClick={onPass}
        className="w-14 h-14 bg-white/15 hover:bg-red-500/80 text-white rounded-full shadow-lg transition-all duration-200 flex items-center justify-center backdrop-blur-sm group"
        aria-label="Skip activity"
      >
        <span className="text-xl group-hover:scale-110 transition-transform">✕</span>
      </button>

      {/* Favourite */}
      <button
        onClick={onToggleFavorite}
        className={`w-14 h-14 ${
          isFavorite
            ? 'bg-pink-500 shadow-pink-500/30'
            : 'bg-white/15 hover:bg-pink-500/80'
        } text-white rounded-full shadow-lg transition-all duration-200 flex items-center justify-center backdrop-blur-sm`}
        aria-label={isFavorite ? 'Remove from favourites' : 'Add to favourites'}
      >
        <span className="text-xl">{isFavorite ? '❤️' : '🤍'}</span>
      </button>

      {/* Done */}
      <button
        onClick={onDone}
        disabled={isDone}
        className={`w-14 h-14 ${
          isDone
            ? 'bg-emerald-500 shadow-emerald-500/30 cursor-default'
            : 'bg-white/15 hover:bg-emerald-500/80'
        } text-white rounded-full shadow-lg transition-all duration-200 flex items-center justify-center backdrop-blur-sm`}
        aria-label={isDone ? 'Already done' : 'Mark as done'}
      >
        <span className="text-xl">{isDone ? '✅' : '✓'}</span>
      </button>

      {/* Next / Like */}
      <button
        onClick={onLike}
        className="w-14 h-14 bg-white/15 hover:bg-green-500/80 text-white rounded-full shadow-lg transition-all duration-200 flex items-center justify-center backdrop-blur-sm group"
        aria-label="Like and next"
      >
        <span className="text-xl group-hover:scale-110 transition-transform">👍</span>
      </button>
    </div>
  );
}
