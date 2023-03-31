import "./FlipCard.js";
import "../ModalWinner.js";

import { randomizer } from "../../module/boardActions.js";
import { getNeighbors } from "../../module/getNeighbors.js";

class PlayerBoard extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  static set rowLength(rowLength) {
    this._rowLength = rowLength;
  }

  static get rowLength() {
    return this._rowLength;
  }

  static get styles() {
    return /* css */ `
      :host {
        width: 100%;
        max-width: 500px;
        max-height: 650px;
        flex: 1;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        background: none;
        padding: 10px;
        gap: 10px;
      }

      .options {
        width: 100%;
        font-size: 1.2rem;
        display: flex;
        justify-content: space-between;
        color: white;
      }

      .options > * {
        cursor: pointer;
      }

      .cards-row {
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: center;
        gap: 10px;
      }

    `;
  }

  connectedCallback() {
    this.render();
    this.fillBoard();
    randomizer();
    this.addEventListener("flip-cards", this.handleFlipCards);

    this.shadowRoot.querySelector(".home").addEventListener("click", this.handleClickGoHome);
    this.shadowRoot.querySelector(".randomize").addEventListener("click", this.handleClickRandomizeBoard);
  }

  fillBoard() {
    const container = this;

    for (let i = 0; i < this.rowLength; i++) {
      const divRow = document.createElement("div");
      divRow.classList.add("cards-row");

      for (let j = 0; j < this.rowLength; j++) {
        const card = document.createElement("flip-card");
        card.classList.add(`${i}-${j}`);
        divRow.appendChild(card);
      }

      container.shadowRoot.appendChild(divRow);
    }
  }

  handleClickGoHome() {
    const container = document.querySelector(".container");
    container.innerHTML = "";
    const optionMenu = document.createElement("options-menu");
    const modal = document.querySelector("modal-winner");
    container.appendChild(optionMenu);
    modal.remove();
  }

  handleClickRandomizeBoard() {
    randomizer();
    const modal = document.querySelector("modal-winner");
    modal.remove();
  }

  handleFlipCards({ detail }) {
    const position = detail.cardPosition;
    const neighbors = getNeighbors(position, this.rowLength);

    this.rotateCards(neighbors, true);
  }

  rotateCards(neighbors, initState = false) {
    const cards = this.shadowRoot.querySelectorAll("flip-card");

    for (const card of cards) {
      if (neighbors.includes(card.classList[0])) {
        card.rotateCard();
      }
    }

    if (initState) this.checkWinner();
  }

  checkWinner() {
    const cards = this.shadowRoot.querySelectorAll("flip-card");
    let winner;

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
  }

  render() {
    this.shadowRoot.innerHTML = /* html */ `
      <style>${PlayerBoard.styles}</style>
      <div class="options">
        <span class="home">🏠 Home</span>
        <span class="randomize">Randomize 🔁</span>
      </div>
    `;
  }
}

customElements.define("player-board", PlayerBoard);
