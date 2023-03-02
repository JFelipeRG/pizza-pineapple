import "../components/FlipCard";

export const fillCards = () => {
  for (let i = 0; i < 9; i++) {
    const card = document.createElement("flip-card");
    card.classList.add(i);
    const container = document.querySelector(".container");

    container.appendChild(card);
  }
};
