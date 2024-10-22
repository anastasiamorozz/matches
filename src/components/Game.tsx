import React, { useEffect, useState } from 'react';
import { calculateOptimalMove, checkWinningMove } from '../utils/main';
import { GameProps } from '../types/GameProps';

const Game: React.FC<GameProps> = ({ firstTurn, matches, maxTake, onGameOver }) => {
  const [availableMatches, setAvailableMatches] = useState(matches);
  const [playerMatches, setPlayerMatches] = useState(0);
  const [computerMatches, setComputerMatches] = useState(0);
  const [turn, setTurn] = useState<'player' | 'computer'>(firstTurn);
  const [isWaiting, setIsWaiting] = useState(false); 

  useEffect(() => {
    if (turn === 'computer') {
      setIsWaiting(true); 
      const timeout = setTimeout(() => {
        const computerMove = getComputerMove();
        makeMove('computer', computerMove);
        setIsWaiting(false); 
      }, 1500); // Затримка в 1.5 секунди

      return () => clearTimeout(timeout);
    }
  }, [turn]);

  const getComputerMove = () => {
    const winningMove = checkWinningMove(maxTake, availableMatches, computerMatches);
    return winningMove || calculateOptimalMove(availableMatches, maxTake);
  };

  const makeMove = (player: 'player' | 'computer', taken: number) => {
    const newMatches = availableMatches - taken;
  
    if (player === 'player') {
      setPlayerMatches(playerMatches + taken);
    } else {
      setComputerMatches(computerMatches + taken);
    }
  
    setAvailableMatches(newMatches);
  
    if (newMatches === 0) {
      const playerWins = playerMatches % 2 === 0;
      const computerWins = computerMatches % 2 === 0;
  
      if (playerWins && computerWins) {
        onGameOver('computer'); // Пріоритет перемоги у комп'ютера
      } else if (playerWins) {
        onGameOver('player');
      } else {
        onGameOver('computer');
      }
    } else {
      setTurn(player === 'player' ? 'computer' : 'player');
    }
  };
  

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-green-50 p-6">
      <h1 className="text-2xl font-bold text-green-800 mb-4">🔥 Matchstick Game</h1>
      <p className="text-lg">Matches Left: {availableMatches}</p>

      <div className="flex space-x-4 mt-6">
        {Array.from({ length: maxTake }, (_, i) => i + 1).map((num) => (
          <button
            key={num}
            onClick={() => makeMove('player', num)}
            disabled={turn !== 'player' || isWaiting || num > availableMatches}
            className={`px-4 py-2 rounded ${
              turn !== 'player' || isWaiting || num > availableMatches
                ? 'bg-gray-300 text-gray-500'
                : 'bg-blue-600 text-white hover:bg-blue-700'
            }`}
          >
            {num}️⃣
          </button>
        ))}
      </div>

      <div className="mt-8">
        <p>Player Matches: {playerMatches}</p>
        <p>Computer Matches: {computerMatches}</p>
      </div>

      {isWaiting && <p className="text-sm text-gray-500 mt-4">Computer is thinking...</p>}
    </div>
  );
};

export default Game;
