export interface GameProps {
  firstTurn: 'player' | 'computer';
  matches: number;
  maxTake: number;
  onGameOver: (winner: 'player' | 'computer' | 'draw') => void;
}