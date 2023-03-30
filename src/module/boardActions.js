import { fillCards } from "./fillCards";
import { getNeighbors } from "./getNeighbors";

// Global variables
let totalCards = 0;
let neighbors = {};

const fillBoard = async ({ target }) => {
  const playerChoose = target.classList[1];
  const rowLenght = {
    easy: 3,
    medium: 4,
    hard: 5
  };
  totalCards = rowLenght[playerChoose] ** 2;

  fillCards(rowLenght[playerChoose]);
  neighbors = getNeighbors(rowLenght[playerChoose], totalCards);
  randomizer();
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

const rotateCards = (arrayPositions) => {
  const cards = document.querySelectorAll("flip-card");

  for (const position of arrayPositions) {
    cards[position].rotateCard();
  }
};

export { neighbors, randomizer, fillBoard, rotateCards };
