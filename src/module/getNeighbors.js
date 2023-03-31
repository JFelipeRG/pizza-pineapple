export const getNeighbors = (position, rowLength) => {
  const neighbors = [];
  const [x, y] = position.split("-").map(Number);

  for (let i = -1; i <= 1; i++) {
    for (let j = -1; j <= 1; j++) {
      if (x + i >= 0 && x + i < rowLength && y + j >= 0 && y + j < rowLength && !(i === 0 && j === 0)) {
        neighbors.push(`${x + i}-${y + j}`);
      }
    }
  }

  neighbors.push(`${x}-${y}`);

  return neighbors;
};
