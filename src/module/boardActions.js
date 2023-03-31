import "../components/Board/PlayerBoard.js";

import { getNeighbors } from "./getNeighbors";

const fillBoard = async (rowLength) => {
  const container = document.querySelector(".container");
  container.innerHTML = "";

  const board = document.createElement("player-board");
  board.rowLength = rowLength;

  container.appendChild(board);
};

const randomizer = () => {
  const randomPositions = [];
  const board = document.querySelector("player-board");

  for (let i = 0; i < 10; i++) {
    const x = Math.floor(Math.random() * board.rowLength);
    const y = Math.floor(Math.random() * board.rowLength);
    randomPositions.push(`${x}-${y}`);
  }

  for (const position of randomPositions) {
    const neighbors = getNeighbors(position, board.rowLength);
    board.rotateCards(neighbors);
  }
};

export { randomizer, fillBoard };
