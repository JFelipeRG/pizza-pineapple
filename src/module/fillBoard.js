import { fillCards } from "./fillCards";
import { rotateCards } from "./rotateCards";
import { getNeighbors } from "./getNeighbors";

// Global variables
const neighbors = {};
let totalCards = 0;

const fillNeighbors = (rowLenght) => {
  for (let i = 0; i < totalCards; i++) {
    neighbors[i] = getNeighbors(i, rowLenght);
  }
};

const fillBoard = (event) => {
  const element = event.target;
  const playerChoose = element.classList[1];
  const rowLenght = {
    easy: 3,
    medium: 4,
    hard: 5
  };
  totalCards = rowLenght[playerChoose] ** 2;

  fillCards(rowLenght[playerChoose]);
  fillNeighbors(rowLenght[playerChoose]);
  // randomizer();
};

const randomizer = () => {
  const randomPositions = [];

  for (let i = 0; i < 10; i++) {
    const randomNumber = Math.floor(Math.random() * totalCards);
    randomPositions.push(randomNumber);
  }

  for (const position of randomPositions) {
    rotateCards(neighbors[position]);
  }
};

export { neighbors, randomizer, fillBoard };
