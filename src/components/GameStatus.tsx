import React from 'react';
import { Trophy, Users, RotateCcw } from 'lucide-react';

interface GameStatusProps {
  winner: 'X' | 'O' | 'draw' | null;
  currentPlayer: 'X' | 'O';
  onRestart: () => void;
}

export default function GameStatus({ winner, currentPlayer, onRestart }: GameStatusProps) {
  const getStatusMessage = () => {
    if (winner === 'draw') {
      return (
        <div className="flex items-center gap-2 text-amber-700">
          <Users size={24} />
          <span className="text-xl font-semibold">It's a draw!</span>
        </div>
      );
    }
    
    if (winner) {
      return (
        <div className="flex items-center gap-2 text-green-700">
          <Trophy size={24} />
          <span className="text-xl font-semibold">
            Player {winner} wins!
          </span>
        </div>
      );
    }
    
    return (
      <div className="flex items-center gap-2 text-gray-700">
        <div className={`w-6 h-6 rounded-full flex items-center justify-center text-white text-sm font-bold ${
          currentPlayer === 'X' ? 'bg-blue-600' : 'bg-red-600'
        }`}>
          {currentPlayer}
        </div>
        <span className="text-xl font-semibold">
          Player {currentPlayer}'s turn
        </span>
      </div>
    );
  };

  return (
    <div className="flex flex-col sm:flex-row items-center justify-between gap-4 p-6 bg-white rounded-xl shadow-lg border border-gray-200">
      <div className="transition-all duration-300 ease-in-out">
        {getStatusMessage()}
      </div>
      
      <button
        onClick={onRestart}
        className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-600 to-purple-700 
                 text-white rounded-lg font-semibold shadow-lg hover:shadow-xl
                 hover:from-purple-700 hover:to-purple-800 transition-all duration-200 
                 transform hover:scale-105 active:scale-95"
      >
        <RotateCcw size={20} />
        <span>New Game</span>
      </button>
    </div>
  );
}