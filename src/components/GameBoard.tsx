import React from 'react';
import Square from './Square';

interface GameBoardProps {
  squares: ('X' | 'O' | null)[];
  onSquareClick: (index: number) => void;
  winningLine?: number[];
  gameOver: boolean;
}

export default function GameBoard({ squares, onSquareClick, winningLine = [], gameOver }: GameBoardProps) {
  return (
    <div className="grid grid-cols-3 gap-4 p-6 bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl shadow-inner">
      {squares.map((square, index) => (
        <Square
          key={index}
          value={square}
          onClick={() => onSquareClick(index)}
          isWinning={winningLine.includes(index)}
          disabled={gameOver}
        />
      ))}
    </div>
  );
}