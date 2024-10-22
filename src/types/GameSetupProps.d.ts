export interface GameSetupProps {
  onStartGame: (firstTurn: 'player' | 'computer', matches: number, maxTake: number) => void;
}