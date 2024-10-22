import React from 'react';
import { ResultScreenProps } from '../types/ResultScreenProps';

const ResultScreen: React.FC<ResultScreenProps> = ({ winner, onRestart }) => {
  const getMessage = () => {
    switch (winner) {
      case 'player':
        return '🎉 Congratulations! You Win!';
      case 'computer':
        return '💻 Computer Wins! Better Luck Next Time!';
      default:
        return '🤝 It’s a Draw!';
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-yellow-50 p-6">
      <h1 className="text-3xl font-bold text-yellow-700 mb-8">{getMessage()}</h1>
      <button
        onClick={onRestart}
        className="bg-blue-600 text-white px-6 py-3 rounded hover:bg-blue-700"
      >
        Play Again
      </button>
    </div>
  );
};

export default ResultScreen;
