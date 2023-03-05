(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))o(s);new MutationObserver(s=>{for(const a of s)if(a.type==="childList")for(const i of a.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&o(i)}).observe(document,{childList:!0,subtree:!0});function t(s){const a={};return s.integrity&&(a.integrity=s.integrity),s.referrerPolicy&&(a.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?a.credentials="include":s.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function o(s){if(s.ep)return;s.ep=!0;const a=t(s);fetch(s.href,a)}})();class l extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"})}connectedCallback(){this.render(),this.shadowRoot.querySelector(".replay").addEventListener("click",this.handleReplayButtonClick),this.shadowRoot.querySelector(".new").addEventListener("click",this.handleNewButtonClick)}static get styles(){return`
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
    `}handleReplayButtonClick(){m(),document.querySelector("modal-winner").remove()}handleNewButtonClick(){const e=document.querySelector(".container");e.innerHTML="";const t=document.createElement("options-menu"),o=document.querySelector("modal-winner");e.appendChild(t),o.remove()}render(){this.shadowRoot.innerHTML=`
        <style>${l.styles}</style>
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
    `}}customElements.define("modal-winner",l);class d extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"}),this.buttonBoundListener=this.handleButtonClick.bind(this)}connectedCallback(){this.render(),this.addEventListener("click",this.buttonBoundListener)}static get styles(){return`
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
        background: url("img/pizza.webp");
        background-size: contain;
        border: 5px solid #edb544;
        display: flex;
        justify-content: center;
        align-items: center;
      }

      .back-face {
        background: url("img/pinneaple.webp");
        border: 5px solid #e5d282;
        transform: rotateY(180deg);
      }
    `}handleButtonClick(e){const t=e.target,o=document.querySelectorAll("flip-card"),s=t.classList[0];let a;p(f[s]);const i=[];for(const c of o)i.push(c.returnFlipPosition());switch(i[0]){case"front":a=!i.includes("back");break;case"back":a=!i.includes("front");break}if(a){const c=document.createElement("modal-winner");document.body.appendChild(c)}}rotateCard(){const e=this.shadowRoot.querySelector(".card"),t=e.classList[1],o={front:"back",back:"front"};e.classList.replace(t,o[t])}returnFlipPosition(){return this.shadowRoot.querySelector(".card").classList[1]}render(){this.shadowRoot.innerHTML=`
      <style>${d.styles}</style>
      <div class="card front">
        <div class="inner">
          <div class="front-face">
          </div>
          <div class="back-face">
          </div>
        </div>
      </div>
    `}}customElements.define("flip-card",d);const b=r=>{const e=document.querySelector(".container");e.innerHTML="";let t=0;for(let o=0;o<r;o++){const s=document.createElement("div");s.classList.add("cards-row");for(let a=0;a<r;a++){const i=document.createElement("flip-card");i.classList.add(t),s.appendChild(i),t++}e.appendChild(s)}},h=(r,e)=>{const t={};for(let o=0;o<e;o++)t[o]=y(o,r);return t},y=(r,e)=>{const t=g(r,e),o=v(r,e);let s=[];return t.validation?o.validation?s=k(o.borderPosition,r,e):s=P(t.borderPosition,r,e):s=[r-e,r-e-1,r-e+1,r,r-1,r+1,r+e,r+e-1,r+e+1],s},g=(r,e)=>{const t={validation:!0,borderPosition:""},o=e**2-1;return r>=0&&r<=e-1?t.borderPosition="top":r>=o-(e-1)&&r<=o?t.borderPosition="bottom":r%e===0?t.borderPosition="left":r%e===e-1?t.borderPosition="right":t.validation=!1,t},v=(r,e)=>{const t={validation:!0,borderPosition:""},o=e**2-1;switch(r){case 0:t.borderPosition="top-left";break;case e-1:t.borderPosition="top-right";break;case o-(e-1):t.borderPosition="bottom-left";break;case o:t.borderPosition="bottom-right";break;default:t.validation=!1}return t},k=(r,e,t)=>{let o=[];switch(r){case"top-left":o=[e,e+1,e+t,e+t+1];break;case"top-right":o=[e,e-1,e+t,e+t-1];break;case"bottom-left":o=[e,e+1,e-t,e-t+1];break;case"bottom-right":o=[e,e-1,e-t,e-t-1];break}return o},P=(r,e,t)=>{let o=[];switch(r){case"top":o=[e,e+1,e-1,e+t,e+t+1,e+t-1];break;case"right":o=[e-t,e-t-1,e,e-1,e+t,e+t-1];break;case"left":o=[e-t,e-t+1,e,e+1,e+t,e+t+1];break;case"bottom":o=[e,e-1,e+1,e-t,e-t-1,e-t+1];break}return o};let n=0,f={};const C=async r=>{const t=r.target.classList[1],o={easy:3,medium:4,hard:5};n=o[t]**2,b(o[t]),f=h(o[t],n),m()},m=()=>{const r=[];for(let e=0;e<10;e++){const t=Math.floor(Math.random()*n);r.push(t)}for(const e of r)p(f[e])},p=r=>{const e=document.querySelectorAll("flip-card");for(const t of r)e[t].rotateCard()};class u extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"})}connectedCallback(){this.render();const e=this.shadowRoot.querySelectorAll(".game-difficulty");for(const t of e)t.addEventListener("click",o=>this.handButtonClick(o))}static get styles(){return`
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
            border-radius: 7px;
            font-weight: 800;
            font-size: 1.5rem;
            text-shadow: 3px 0 #fff, -3px 0 #fff, 0 3px #fff, 0 -3px #fff,
                2px 2px #fff, -2px -2px #fff, 2px -2px #fff, -2px 2px #fff;
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
    `}handButtonClick(e){C(e)}render(){this.shadowRoot.innerHTML=`
        <style>${u.styles}</style>
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
    `}}customElements.define("options-menu",u);
