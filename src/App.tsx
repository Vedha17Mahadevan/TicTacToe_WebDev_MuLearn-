import React from 'react';
import GameBoard from './components/GameBoard';
import GameStatus from './components/GameStatus';
import { useTicTacToe } from './hooks/useTicTacToe';

function App() {
  const {
    squares,
    currentPlayer,
    winner,
    winningLine,
    gameOver,
    makeMove,
    resetGame,
  } = useTicTacToe();

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-100 via-purple-50 to-pink-100 flex items-center justify-center p-4">
      <div className="w-full max-w-md space-y-6">
        {/* Game Title */}
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-800 mb-2">
            Tic-Tac-Toe
          </h1>
          <p className="text-gray-600">
            Challenge your friend to a classic game!
          </p>
        </div>

        {/* Game Status */}
        <GameStatus
          winner={winner}
          currentPlayer={currentPlayer}
          onRestart={resetGame}
        />

        {/* Game Board */}
        <GameBoard
          squares={squares}
          onSquareClick={makeMove}
          winningLine={winningLine}
          gameOver={gameOver}
        />

        {/* Game Instructions */}
        <div className="text-center text-sm text-gray-500 space-y-1">
          <p>Players take turns placing X's and O's</p>
          <p>First to get 3 in a row wins!</p>
        </div>
      </div>
    </div>
  );
}

export default App;