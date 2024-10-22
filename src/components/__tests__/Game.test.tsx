import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import Game from '../Game';

jest.mock('../../utils/main', () => ({
  calculateOptimalMove: jest.fn(),
  checkWinningMove: jest.fn(),
}));

describe('Game Component', () => {
  const mockOnGameOver = jest.fn();

  beforeEach(() => {
    render(<Game firstTurn="player" matches={25} maxTake={3} onGameOver={mockOnGameOver} />);
  });

  test('renders with the correct initial state', () => {
    const matchesLeft = screen.getByText(/Matches Left: 25/i);
    expect(matchesLeft).toBeInTheDocument();
    expect(screen.getByText(/Player Matches: 0/i)).toBeInTheDocument();
    expect(screen.getByText(/Computer Matches: 0/i)).toBeInTheDocument();
  });
});
