// src/App.tsx
import React, { useState } from 'react';
import GameSetup from './components/GameSetup';
import Game from './components/Game';
import ResultScreen from './components/ResultScreen';

const App: React.FC = () => {
  const [gameConfig, setGameConfig] = useState<{
    firstTurn: 'player' | 'computer';
    matches: number;
    maxTake: number;
  } | null>(null);

  const [winner, setWinner] = useState<'player' | 'computer' | 'draw' | null>(null);

  const startGame = (firstTurn: 'player' | 'computer', matches: number, maxTake: number) => {
    setGameConfig({ firstTurn, matches, maxTake });
    setWinner(null); 
  };

  const handleGameOver = (winner: 'player' | 'computer' | 'draw') => {
    setWinner(winner); 
    setGameConfig(null);
  };

  const restartGame = () => {
    setWinner(null);
    setGameConfig(null);
  };

  return (
    <div className="App">
      {!gameConfig && !winner ? (
        <GameSetup onStartGame={startGame} />
      ) : winner ? (
        <ResultScreen winner={winner} onRestart={restartGame} />
      ) : (
        <Game
          firstTurn={gameConfig!.firstTurn}
          matches={gameConfig!.matches}
          maxTake={gameConfig!.maxTake}
          onGameOver={handleGameOver}
        />
      )}
    </div>
  );
};

export default App;
