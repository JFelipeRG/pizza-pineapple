class ModalWinner extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  connectedCallback() {
    this.render();
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
          gap: 5rem;
        }

        .replay,
        .new {
          width: 2.5rem;
          aspect-ratio: 2/1;
          text-align: center;
          color: white;
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        figure {
          width: 2rem;
        }

        img {
          width: 100%;
        }

        span {
          text-align: center;
          font-size: 0.75rem;
          text-shadow: 3px 3px 2px black;
        }

        h1,
        h2,
        .replay,
        .new {
          animation: popItem 0.75s forwards;
        }

        @keyframes popItem{
          100% {
            transform: scale(2)
          }
        }
    `;
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
