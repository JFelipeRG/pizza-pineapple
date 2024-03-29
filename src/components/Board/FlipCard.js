class FlipCard extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this.buttonBoundListener = this.handleButtonClick.bind(this);
  }

  connectedCallback() {
    this.render();
    this.addEventListener("click", this.buttonBoundListener);
    this.addEventListener("rotate-cards", this.handleRotateCards);
  }

  static get styles() {
    return /* css */`
      :host {
        display: block;
        width: 100%;
        height: 100%;
      }

      .card {
        background-color: transparent;
        border-radius: 7px;
        width: 100%;
        height: 100%;
        perspective: 1000px;
      }

      .inner {
        position: relative;
        width: 100%;
        height: 100%;
        text-align: center;
        transition: transform 0.8s;
        transform-style: preserve-3d;
      }

      .card.front .inner {
        transform: rotateY(0deg);
      }

      .card.back .inner {
        transform: rotateY(180deg);
      }

      .inner div {
        position: absolute;
        width: 100%;
        height: 100%;
        background-size: cover;
        border-radius: 7px;
        backface-visibility: hidden;
      }

      .front-face, .back-face {
        box-sizing: border-box;
        width: 100%;
        background: url("/img/pizza.webp");
        background-size: contain;
        border: 5px solid #edb544;
        display: flex;
        justify-content: center;
        align-items: center;
      }

      .back-face {
        background: url("/img/pinneaple.webp");
        border: 5px solid #e5d282;
        transform: rotateY(180deg);
      }
    `;
  }

  handleButtonClick({ target }) {
    const position = target.classList[0];
    const event = new CustomEvent("flip-cards", {
      detail: {
        cardPosition: position,
      },
      bubbles: true,
      composed: true
    });

    target.dispatchEvent(event);
  }

  rotateCard() {
    const card = this.shadowRoot.querySelector(".card");
    const actualPosition = card.classList[1];
    const swap = {
      front: "back",
      back: "front"
    };

    card.classList.replace(actualPosition, swap[actualPosition]);
  }

  returnFlipPosition() {
    return this.shadowRoot.querySelector(".card").classList[1];
  }

  render() {
    this.shadowRoot.innerHTML = /* html */ `
      <style>${FlipCard.styles}</style>
      <div class="card front">
        <div class="inner">
          <div class="front-face">
          </div>
          <div class="back-face">
          </div>
        </div>
      </div>
    `;
  }
}

customElements.define("flip-card", FlipCard);
