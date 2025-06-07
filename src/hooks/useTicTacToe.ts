import { useState, useCallback } from 'react';

type Player = 'X' | 'O';
type Square = Player | null;
type Winner = Player | 'draw' | null;

const WINNING_COMBINATIONS = [
  [0, 1, 2], // Top row
  [3, 4, 5], // Middle row
  [6, 7, 8], // Bottom row
  [0, 3, 6], // Left column
  [1, 4, 7], // Middle column
  [2, 5, 8], // Right column
  [0, 4, 8], // Diagonal top-left to bottom-right
  [2, 4, 6], // Diagonal top-right to bottom-left
];

export function useTicTacToe() {
  const [squares, setSquares] = useState<Square[]>(Array(9).fill(null));
  const [currentPlayer, setCurrentPlayer] = useState<Player>('X');
  const [winner, setWinner] = useState<Winner>(null);
  const [winningLine, setWinningLine] = useState<number[]>([]);

  const checkWinner = useCallback((squares: Square[]): { winner: Winner; winningLine: number[] } => {
    // Check for winning combinations
    for (const combination of WINNING_COMBINATIONS) {
      const [a, b, c] = combination;
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        return { winner: squares[a], winningLine: combination };
      }
    }

    // Check for draw (all squares filled, no winner)
    if (squares.every(square => square !== null)) {
      return { winner: 'draw', winningLine: [] };
    }

    // Game continues
    return { winner: null, winningLine: [] };
  }, []);

  const makeMove = useCallback((index: number) => {
    // Don't allow move if square is already filled or game is over
    if (squares[index] || winner) {
      return;
    }

    const newSquares = [...squares];
    newSquares[index] = currentPlayer;
    setSquares(newSquares);

    // Check for winner after the move
    const { winner: newWinner, winningLine: newWinningLine } = checkWinner(newSquares);
    
    if (newWinner) {
      setWinner(newWinner);
      setWinningLine(newWinningLine);
    } else {
      // Switch to the other player
      setCurrentPlayer(currentPlayer === 'X' ? 'O' : 'X');
    }
  }, [squares, currentPlayer, winner, checkWinner]);

  const resetGame = useCallback(() => {
    setSquares(Array(9).fill(null));
    setCurrentPlayer('X');
    setWinner(null);
    setWinningLine([]);
  }, []);

  const gameOver = winner !== null;

  return {
    squares,
    currentPlayer,
    winner,
    winningLine,
    gameOver,
    makeMove,
    resetGame,
  };
}