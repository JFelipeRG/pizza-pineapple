import "../components/FlipCard";

export const fillCards = (rowLenght) => {
  const container = document.querySelector(".container");
  container.innerHTML = "";
  let index = 0;

  for (let i = 0; i < rowLenght; i++) {
    const divRow = document.createElement("div");
    divRow.classList.add("cards-row");

    for (let j = 0; j < rowLenght; j++) {
      const card = document.createElement("flip-card");
      card.classList.add(index);
      divRow.appendChild(card);
      index++;
    }

    container.appendChild(divRow);
  }
};
