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
    <div className="flex flex-col items-center justify-center min-h-screen bg-[#1E1E1E] p-6">
      <h1 
        className="text-3xl font-bold text-[#DE00FF] mb-8"
        style={{ textShadow: '1px 1px 2px black' }}
      >
        {getMessage()}
      </h1>
      <button
        onClick={onRestart}
        className="px-6 py-3 rounded-lg text-xl font-bold bg-[#DE00FF] text-white hover:bg-[#8000FF] transition duration-300"
        style={{ textShadow: '1px 1px 2px black' }}
      >
        Play Again
      </button>
    </div>
  );
};

export default ResultScreen;
