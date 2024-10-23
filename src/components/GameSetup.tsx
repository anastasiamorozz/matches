import React, { useState } from 'react';
import { GameSetupProps } from '../types/GameSetupProps';
import Header from './Header';

const GameSetup: React.FC<GameSetupProps> = ({ onStartGame }) => {
  const [firstTurn, setFirstTurn] = useState<'player' | 'computer'>('player');
  const [matches, setMatches] = useState(25);
  const [maxTake, setMaxTake] = useState(3);

  const handleStart = () => {
    onStartGame(firstTurn, matches, maxTake);
  };

  return (
    <div>
      <Header />
      <div className="flex flex-col items-center justify-center min-h-screen  p-6">
        <h1 className="text-4xl font-bold text-[#DE00FF] mb-8" style={{ textShadow: '2px 2px 4px black' }}>
          Who plays first?
        </h1>

        <div className="mb-10 flex space-x-10">
          {['player', 'computer'].map((turn) => (
            <button
              key={turn}
              onClick={() => setFirstTurn(turn as 'player' | 'computer')}
              className={`p-6 rounded-lg ${
                firstTurn === turn ? 'bg-[#DE00FF]' : 'bg-gray-800'
              }`}
            >
              <span role="img" aria-label={turn} className="text-5xl">
                {turn === 'player' ? '👩‍💻' : '🤖'}
              </span>
            </button>
          ))}
        </div>

        <div className="mb-6 flex flex-col items-center text-white">
          <label className="block mb-2 text-lg">Total Matches:</label>
          <input
            type="number"
            min={5}
            max={101}
            value={matches}
            onChange={(e) => setMatches(parseInt(e.target.value))}
            className="w-24 text-center p-3 rounded-lg bg-gray-800 text-[#DE00FF] font-bold text-xl focus:outline-none focus:ring-2 focus:ring-[#DE00FF]"
          />
        </div>

        <div className="mb-8 flex flex-col items-center text-white">
          <label className="block mb-2 text-lg">Max Matches Per Turn:</label>
          <input
            type="number"
            min={1}
            max={10}
            value={maxTake}
            onChange={(e) => setMaxTake(parseInt(e.target.value))}
            className="w-24 text-center p-3 rounded-lg bg-gray-800 text-[#DE00FF] font-bold text-xl focus:outline-none focus:ring-2 focus:ring-[#DE00FF]"
          />
        </div>

        <button
          onClick={handleStart}
          className="px-10 py-4 rounded-full text-2xl font-bold bg-[#DE00FF] text-white hover:bg-[#8000FF] transition-transform transform hover:scale-110"
          style={{ boxShadow: '0px 4px 15px rgba(222, 0, 255, 0.5)' }}
        >
          Start Game!
        </button>
      </div>
    </div>
  );
};

export default GameSetup;
