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
    <div className="flex justify-center gap-4">
      {/* Pass Button */}
      <button
        onClick={onPass}
        className="w-16 h-16 bg-red-500 hover:bg-red-600 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-200 flex items-center justify-center"
        aria-label="Pass this activity"
      >
        <span className="text-2xl">✕</span>
      </button>

      {/* Favorite Toggle */}
      <button
        onClick={onToggleFavorite}
        className={`w-16 h-16 ${
          isFavorite 
            ? 'bg-pink-500 hover:bg-pink-600' 
            : 'bg-gray-400 hover:bg-gray-500'
        } text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-200 flex items-center justify-center`}
        aria-label={isFavorite ? 'Remove from favorites' : 'Add to favorites'}
      >
        <span className="text-2xl">❤️</span>
      </button>

      {/* Done Button */}
      <button
        onClick={onDone}
        disabled={isDone}
        className={`w-16 h-16 ${
          isDone 
            ? 'bg-green-300 cursor-not-allowed' 
            : 'bg-green-500 hover:bg-green-600'
        } text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-200 flex items-center justify-center`}
        aria-label={isDone ? 'Already done today' : 'Mark as done today'}
      >
        <span className="text-2xl">✓</span>
      </button>

      {/* Like Button */}
      <button
        onClick={onLike}
        className="w-16 h-16 bg-green-500 hover:bg-green-600 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-200 flex items-center justify-center"
        aria-label="Like this activity"
      >
        <span className="text-2xl">👍</span>
      </button>
    </div>
  );
}