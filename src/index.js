// Functions
import { fillCards } from "./module/fillCards";

// Components
import "./components/ModalWinner";

const neighbors = {
  0: [0, 1, 3, 4],
  1: [0, 1, 2, 3, 4, 5],
  2: [1, 2, 4, 5],
  3: [0, 1, 3, 4, 6, 7],
  4: [0, 1, 2, 3, 4, 5, 6, 7, 8],
  5: [1, 2, 4, 5, 7, 8],
  6: [3, 4, 6, 7],
  7: [3, 4, 5, 6, 7, 8],
  8: [4, 5, 7, 8],
};

(async () => {
  await fillCards();

  const randomPositions = [];

  // for (let i = 0; i < 10; i++) {
  //   const randomNumber = Math.floor(Math.random() * 9);
  //   randomPositions.push(randomNumber);
  // }

  // for (const position of randomPositions) {
  //   rotateCards(neighbors[position]);
  // }

  const cards = document.querySelectorAll("flip-card");

  for (const card of cards) {
    card.addEventListener("click", e => flipCard(e.target, cards));
  }

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
})();

const rotateCards = (arrayPositions) => {
  const cards = document.querySelectorAll("flip-card");

  for (const position of arrayPositions) {
    cards[position].rotateCard();
  }
};
