import { randomizer } from "../module/boardActions";
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
          color: white;
          text-align: center;
          font-size: 3rem;
          text-shadow: 5px 5px 5px black;
        }

        h2 {
          font-size: 1.5rem;
        }

        .buttons-container {
          display: flex;
          justify-content: center;
          gap: 50px;
        }

        .replay,
        .new {
          text-align: center;
          color: white;
          display: flex;
          flex-direction: column;
          align-items: center;
          cursor: pointer;
        }

        figure {
          width: 4rem;
        }

        img {
          width: 100%;
        }

        span {
          text-align: center;
          font-size: 1rem;
          text-shadow: 3px 3px 2px black;
        }

        h1,
        h2,
        .replay,
        .new {
          animation: popItem 0.7s forwards;
        }

        @keyframes popItem{
          0% {
            transform: scale(0.1)
          }
          100% {
            transform: scale(1)
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
                  <img src="/img/pizza-button.png" alt="Image for pizza button">
                </figure>
                <span>Play Again</span>
              </div>
              <div class="new">
                <figure>
                  <img src="/img/pinneaple-button.png" alt="Image for pinneaple button">
                </figure>
                <span>New Game</span>
              </div>
            </div>
        </div>
    `;
  }
}

customElements.define("modal-winner", ModalWinner);
