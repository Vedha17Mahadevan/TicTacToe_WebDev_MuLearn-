import React from 'react';
import { X, Circle } from 'lucide-react';

interface SquareProps {
  value: 'X' | 'O' | null;
  onClick: () => void;
  isWinning?: boolean;
  disabled?: boolean;
}

export default function Square({ value, onClick, isWinning = false, disabled = false }: SquareProps) {
  return (
    <button
      onClick={onClick}
      disabled={disabled || value !== null}
      className={`
        aspect-square w-full bg-white rounded-xl shadow-lg border-2 border-gray-200
        flex items-center justify-center text-4xl font-bold
        transition-all duration-200 ease-in-out
        hover:scale-105 hover:shadow-xl hover:border-gray-300
        disabled:cursor-not-allowed
        ${isWinning ? 'bg-gradient-to-br from-yellow-200 to-yellow-300 border-yellow-400' : ''}
        ${!disabled && value === null ? 'hover:bg-gray-50' : ''}
      `}
    >
      {value === 'X' && (
        <X 
          size={48} 
          className={`${isWinning ? 'text-blue-700' : 'text-blue-600'} drop-shadow-sm`}
          strokeWidth={3}
        />
      )}
      {value === 'O' && (
        <Circle 
          size={48} 
          className={`${isWinning ? 'text-red-700' : 'text-red-600'} drop-shadow-sm`}
          strokeWidth={3}
        />
      )}
    </button>
  );
}