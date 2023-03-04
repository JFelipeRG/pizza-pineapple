import { randomizer } from "../module/fillBoard";
import "../components/OptionsMenu";

class ModalWinner extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  connectedCallback() {
    this.render();
    this.shadowRoot.querySelector(".replay").addEventListener("click", this.handleReplayButtonClick);
    this.shadowRoot.querySelector(".new").addEventListener("click", this.handleNewButtonClick);
  }

  static get styles() {
    return /* css */ `
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        .modal {
          width: 20rem;
          height: 20rem;
          display: flex;
          flex-direction: column;
          justify-content: center;
          gap: 2rem;
        }

        h1, h2 {
          max-width: 100%;
          margin: 2rem;
          color: white;
          text-align: center;
          font-size: 1.65rem;
          text-shadow: 5px 5px 5px black;
        }

        h2 {
          font-size: 1rem;
        }

        .buttons-container {
          display: flex;
          justify-content: center;
          width: 100%;
          height: fit-content;
          gap: 10px;
        }

        .replay,
        .new {
          width: 100%;
          aspect-ratio: 2/1;
          text-align: center;
          color: white;
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        figure {
          width: 2.5rem;
        }

        img {
          width: 100%;
        }

        span {
          text-align: center;
          font-size: 0.6rem;
          text-shadow: 3px 3px 2px black;
        }

        h1,
        h2,
        .replay,
        .new {
          animation: popItem 0.7s forwards;
        }

        @keyframes popItem{
          100% {
            transform: scale(2)
          }
        }
    `;
  }

  handleReplayButtonClick() {
    randomizer();
    const modal = document.querySelector("modal-winner");
    modal.remove();
  }

  handleNewButtonClick() {
    const container = document.querySelector(".container");
    container.innerHTML = "";
    const optionMenu = document.createElement("options-menu");
    const modal = document.querySelector("modal-winner");
    container.appendChild(optionMenu);
    modal.remove();
  }

  render() {
    this.shadowRoot.innerHTML = /* html */ `
        <style>${ModalWinner.styles}</style>
        <div class="modal">
            <div class="message">
              <h1>¡Felicidades!</h1>
              <h2>🎉Has Ganado🎉</h2>
            </div>
            <div class="buttons-container">
              <div class="replay">
                <figure>
                  <img src="img/pizza-button.png" alt="Image for pizza button">
                </figure>
                <span>Play Again</span>
              </div>
              <div class="new">
                <figure>
                  <img src="img/pinneaple-button.png" alt="Image for pinneaple button">
                </figure>
                <span>New Game</span>
              </div>
            </div>
        </div>
    `;
  }
}

customElements.define("modal-winner", ModalWinner);
