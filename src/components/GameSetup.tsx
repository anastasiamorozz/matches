import React, { useState } from 'react';
import { GameSetupProps } from '../types/GameSetupProps';

const GameSetup: React.FC<GameSetupProps> = ({ onStartGame }) => {
  const [firstTurn, setFirstTurn] = useState<'player' | 'computer'>('player');
  const [matches, setMatches] = useState(25);
  const [maxTake, setMaxTake] = useState(3);

  const handleStart = () => {
    onStartGame(firstTurn, matches, maxTake);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-blue-50 p-6">
      <h1 className="text-3xl font-bold text-blue-800 mb-8">🎮 Welcome to the Matchstick Game!</h1>

      <div className="mb-6">
        <label className="text-lg font-semibold text-gray-700 mb-2 block">Who plays first?</label>
        <div className="flex space-x-4">
          <button
            onClick={() => setFirstTurn('player')}
            className={`px-4 py-2 rounded ${
              firstTurn === 'player' ? 'bg-blue-600 text-white' : 'bg-gray-200'
            }`}
          >
            Player
          </button>
          <button
            onClick={() => setFirstTurn('computer')}
            className={`px-4 py-2 rounded ${
              firstTurn === 'computer' ? 'bg-blue-600 text-white' : 'bg-gray-200'
            }`}
          >
            Computer
          </button>
        </div>
      </div>

      <div className="mb-6">
        <label className="text-lg font-semibold text-gray-700 mb-2 block">Total Matches:</label>
        <input
          type="number"
          min={5}
          max={101}
          value={matches}
          onChange={(e) => setMatches(parseInt(e.target.value))}
          className="w-24 text-center p-2 border rounded border-gray-300"
        />
      </div>

      <div className="mb-6">
        <label className="text-lg font-semibold text-gray-700 mb-2 block">Max Matches Per Turn:</label>
        <input
          type="number"
          min={1}
          max={10}
          value={maxTake}
          onChange={(e) => setMaxTake(parseInt(e.target.value))}
          className="w-24 text-center p-2 border rounded border-gray-300"
        />
      </div>

      <button
        onClick={handleStart}
        className="bg-green-600 text-white px-6 py-3 rounded hover:bg-green-700"
      >
        Start Game
      </button>
    </div>
  );
};

export default GameSetup;
