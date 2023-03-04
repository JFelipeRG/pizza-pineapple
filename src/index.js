// Functions
import { fillCards } from "./module/fillCards";
import { getNeighbors } from "./module/getNeighbors";

// Components
import "./components/ModalWinner";

// Global variables
const neighbors = {};

const fillNeighbors = async (rowLenght) => {
  const totalCards = rowLenght ** 2;

  for (let i = 0; i < totalCards; i++) {
    neighbors[i] = await getNeighbors(i, rowLenght);
  }
};

const optionsButtons = document.querySelectorAll(".game-difficulty");

for (const optionButton of optionsButtons) {
  optionButton.addEventListener("click", e => fillBoard(e));
}

const fillBoard = async (event) => {
  const element = event.target;
  const playerChoose = element.classList[1];
  const rowLenght = {
    easy: 3,
    medium: 4,
    hard: 5
  };
  const totalCards = rowLenght[playerChoose] ** 2;

  await fillCards(rowLenght[playerChoose]);
  await fillNeighbors(rowLenght[playerChoose]);

  const randomPositions = [];

  for (let i = 0; i < 10; i++) {
    const randomNumber = Math.floor(Math.random() * totalCards);
    randomPositions.push(randomNumber);
  }

  for (const position of randomPositions) {
    rotateCards(neighbors[position]);
  }

  const cards = document.querySelectorAll("flip-card");

  for (const card of cards) {
    card.addEventListener("click", e => flipCard(e.target, cards));
  }
};

const flipCard = (card, cards) => {
  const cardPosition = card.classList[0];
  let winner = false;

  rotateCards(neighbors[cardPosition]);

  const flipPosition = [];

  for (const card of cards) {
    flipPosition.push(card.returnFlipPosition());
  }

  switch (flipPosition[0]) {
    case "front":
      winner = !flipPosition.includes("back");
      break;
    case "back":
      winner = !flipPosition.includes("front");
      break;
  }

  if (winner) {
    const modal = document.createElement("modal-winner");
    document.body.appendChild(modal);
  }
};

const rotateCards = (arrayPositions) => {
  const cards = document.querySelectorAll("flip-card");

  for (const position of arrayPositions) {
    cards[position].rotateCard();
  }
};
