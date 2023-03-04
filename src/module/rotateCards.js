export const rotateCards = (arrayPositions) => {
  const cards = document.querySelectorAll("flip-card");

  for (const position of arrayPositions) {
    cards[position].rotateCard();
  }
};
