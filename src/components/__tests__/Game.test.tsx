import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import Game from '../Game';
import { calculateOptimalMove, checkWinningMove } from '../../utils/main';

jest.mock('../../utils/main', () => ({
  calculateOptimalMove: jest.fn() as jest.Mock<any, [number, number]>,
  checkWinningMove: jest.fn() as jest.Mock<any, [number, number, number]>,
}));

describe('Game Component', () => {
  const mockOnGameOver = jest.fn();

  beforeEach(() => {
    jest.clearAllMocks();
  });

  test('renders the game with initial matches', () => {
    render(<Game firstTurn="player" matches={10} maxTake={3} onGameOver={mockOnGameOver} />);

    expect(screen.getByText('🔥 Matchstick Game')).toBeInTheDocument();
    expect(screen.getByText('10')).toBeInTheDocument(); 
    expect(screen.getByText('👩‍💻')).toBeInTheDocument(); 
    expect(screen.getByText('🤖')).toBeInTheDocument(); 
  });

  test('player makes a move', () => {
    render(<Game firstTurn="player" matches={10} maxTake={3} onGameOver={mockOnGameOver} />);

    fireEvent.click(screen.getByText('1️')); 

    expect(screen.getByText('9')).toBeInTheDocument(); 
    expect(mockOnGameOver).not.toHaveBeenCalled(); 
  });
});
