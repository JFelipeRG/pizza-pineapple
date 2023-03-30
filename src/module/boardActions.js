import { fillCards } from "./fillCards";
import { getNeighbors } from "./getNeighbors";

const fillBoard = async (rowLength) => {
  fillCards(rowLength);
  randomizer(rowLength);
};

const randomizer = (rowLength) => {
  const randomPositions = [];
  const totalCards = rowLength ** 2;

  for (let i = 0; i < 10; i++) {
    const randomNumber = Math.floor(Math.random() * totalCards);
    randomPositions.push(randomNumber);
  }

  for (const position of randomPositions) {
    const neighbors = getNeighbors(position, rowLength);
    rotateCards(neighbors);
  }
};

const rotateCards = (arrayPositions) => {
  const cards = document.querySelectorAll("flip-card");

  for (const position of arrayPositions) {
    cards[position].rotateCard();
  }
};

export { randomizer, fillBoard, rotateCards };
