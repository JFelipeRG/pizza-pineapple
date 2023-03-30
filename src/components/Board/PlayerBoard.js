class BaseElement extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  static get styles() {
    return /* css */ `
    `;
  }

  connectedCallback() {
    this.render();
  }

  comming() {
    const card = event.target;
    const cards = document.querySelectorAll("flip-card");
    const cardPosition = card.classList[0];
    let winner;

    console.log(cardPosition);

    // rotateCards(neighbors[cardPosition]);

    // const flipPosition = [];

    // for (const card of cards) {
    //   flipPosition.push(card.returnFlipPosition());
    // }

    // switch (flipPosition[0]) {
    //   case "front":
    //     winner = !flipPosition.includes("back");
    //     break;
    //   case "back":
    //     winner = !flipPosition.includes("front");
    //     break;
    // }

    // if (winner) {
    //   const modal = document.createElement("modal-winner");
    //   document.body.appendChild(modal);
    // }
  }

  render() {
    this.shadowRoot.innerHTML = /* html */ `
      <style>${BaseElement.styles}</style>

    `;
  }
}

customElements.define("base-element", BaseElement);
