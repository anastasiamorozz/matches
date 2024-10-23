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
        onGameOver('draw'); // Пріоритет перемоги у комп'ютера
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
    <div className="flex flex-col items-center justify-center min-h-screen bg-[#1E1E1E] p-6">
      <h1 className="text-2xl font-bold text-white mb-4" style={{ textShadow: '1px 1px 2px black' }}>
        🔥 Matchstick Game
      </h1>

      <div className="relative text-center mb-8 p-6">
        <span className="text-6xl">📦</span>
        <p
          className="absolute inset-0 flex items-center justify-center text-white text-3xl font-bold"
          style={{ textShadow: '1px 1px 2px black' }}
        >
          {availableMatches}
        </p>
      </div>

      <div className="flex space-x-4 mb-8">
        {Array.from({ length: maxTake }, (_, i) => i + 1).map((num) => (
          <button
            key={num}
            onClick={() => makeMove('player', num)}
            disabled={turn !== 'player' || isWaiting || num > availableMatches}
            className={`w-16 h-16 rounded-lg text-xl font-bold ${
              turn !== 'player' || isWaiting || num > availableMatches
                ? 'bg-gray-600 text-gray-400'
                : 'bg-[#DE00FF] text-white hover:bg-[#8000FF]'
            }`}
            style={{ textShadow: '1px 1px 2px black' }}
          >
            {num}️
          </button>
        ))}
      </div>

      <div className="flex justify-around w-full max-w-xs p-4">
        <div className="flex flex-col items-center text-[#DE00FF] rounded-lg">
          <span className="text-3xl">👩‍💻</span>
          <p className="text-xl font-bold" style={{ textShadow: '1px 1px 2px black' }}>
            {playerMatches}
          </p>
        </div>
        <div className="flex flex-col items-center text-[#DE00FF]">
          <span className="text-3xl">
            {isWaiting ? <span className="animate-bounce">🤔</span> : <span className="animate-bounce">🤖</span>}
          </span>
          <p className="text-xl font-bold" style={{ textShadow: '1px 1px 2px black' }}>
            {computerMatches}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Game;
