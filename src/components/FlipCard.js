class FlipCard extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  connectedCallback() {
    this.render();
  }

  static get styles() {
    return /* css */`
      .card {
        background-color: transparent;
        border-radius: 7px;
        width: 7rem;
        height: 10rem;
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
        background-size: contain;
        border-radius: 7px;
        backface-visibility: hidden;
      }

      .front-face {
        width: 100%;
        background: url("img/pizza.webp");
      }

      .back-face {
        background: url("img/pinneaple.webp");
        transform: rotateY(180deg);
      }
    `;
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
          <div class="front-face"></div>
          <div class="back-face"></div>
        </div>
      </div>
    `;
  }
}

customElements.define("flip-card", FlipCard);
