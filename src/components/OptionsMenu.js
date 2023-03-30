import { fillBoard } from "../module/boardActions";

class OptionsMenu extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  connectedCallback() {
    this.render();

    const options = this.shadowRoot.querySelectorAll(".game-difficulty");
    for (const option of options) {
      option.addEventListener("click", e => this.handButtonClick(e));
    }
  }

  static get styles() {
    return /* css */ `
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }


        .game-difficulty {
            --easy-color: #51b073;
            --medium-color: #be8824;
            --hard-color: #af3131;

            width: 70%;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            border: 5px solid white;
            padding: 30px;
            cursor: pointer;
            border-radius: 7px;
            font-weight: 800;
            font-size: 1.5rem;
            text-shadow: 3px 0 #fff, -3px 0 #fff, 0 3px #fff, 0 -3px #fff,
                2px 2px #fff, -2px -2px #fff, 2px -2px #fff, -2px 2px #fff;
        }

        .game-difficulty:hover {
          transform: scale(1.2);
          transition: all 0.2s ease-in-out;
        }

        .game-difficulty > * {
            pointer-events: none;
        }

        .easy {
            background-color: var(--easy-color);
            color: var(--easy-color);
        }

        .medium {
            background-color: var(--medium-color);
            color: var(--medium-color);
        }

        .hard {
            background-color: var(--hard-color);
            color: var(--hard-color);
        }
    `;
  }

  handButtonClick(event) {
    fillBoard(event);
  }

  render() {
    this.shadowRoot.innerHTML = /* html */ `
        <style>${OptionsMenu.styles}</style>
        <div class="game-difficulty easy">
            <h2>3x3</h2>
            <p>Easy</p>
        </div>
        <div class="game-difficulty medium">
            <h2>4x4</h2>
            <p>Medium</p>
        </div>
        <div class="game-difficulty hard">
            <h2>5x5</h2>
            <p>Hard</p>
        </div>
    `;
  }
}

customElements.define("options-menu", OptionsMenu);
