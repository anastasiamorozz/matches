export interface ResultScreenProps {
  winner: 'player' | 'computer' | 'draw';
  onRestart: () => void;
}