import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import GameSetup from '../GameSetup';

describe('GameSetup Component', () => {
  const mockOnStartGame = jest.fn();

  beforeEach(() => {
    render(<GameSetup onStartGame={mockOnStartGame} />);
  });

  test('renders the welcome message', () => {
    const heading = screen.getByText(/🎮 Welcome to the Matchstick Game!/i);
    expect(heading).toBeInTheDocument();
  });

  test('allows the player to choose who plays first', () => {
    const playerButton = screen.getByRole('button', { name: /Player/i });
    const computerButton = screen.getByRole('button', { name: /Computer/i });

    fireEvent.click(playerButton);
    expect(playerButton).toHaveClass('bg-blue-600 text-white');
    expect(computerButton).not.toHaveClass('bg-blue-600 text-white');

    fireEvent.click(computerButton);
    expect(computerButton).toHaveClass('bg-blue-600 text-white');
    expect(playerButton).not.toHaveClass('bg-blue-600 text-white');
  });
});
