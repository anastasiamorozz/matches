const calculateOptimalMove = (availableMatches: number, maxTakeable: number): number => {
  if ((availableMatches - 3) % (maxTakeable + 1) === 0 || (availableMatches - 3) % (maxTakeable + 1) === 1) {
    return 3;
  } else {
    return 1;
  }
}

const checkWinningMove = (maxTakeable: number, availableMatches: number, computerScore: number): number => {
  for (let i = 1; i <= maxTakeable; i++) {
    if (availableMatches - i === 0 || availableMatches - i === 1) {
      if ((computerScore + i) % 2 === 0) {
        return i;
      }
    }
  }
  return 0;
}

const clampValue = (value: number, min: number, max: number): number => {
  return Math.min(Math.max(value, min), max);
}
  
export{
    calculateOptimalMove,
    checkWinningMove,
    clampValue,
};