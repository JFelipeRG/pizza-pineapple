(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const i of t.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&o(i)}).observe(document,{childList:!0,subtree:!0});function n(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function o(e){if(e.ep)return;e.ep=!0;const t=n(e);fetch(e.href,t)}})();class c extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"})}connectedCallback(){this.render()}static get styles(){return`
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
    `}rotateCard(){const r=this.shadowRoot.querySelector(".card"),n=r.classList[1],o={front:"back",back:"front"};r.classList.replace(n,o[n])}returnFlipPosition(){return this.shadowRoot.querySelector(".card").classList[1]}render(){this.shadowRoot.innerHTML=`
      <style>${c.styles}</style>
      <div class="card front">
        <div class="inner">
          <div class="front-face"></div>
          <div class="back-face"></div>
        </div>
      </div>
    `}}customElements.define("flip-card",c);const f=()=>{for(let s=0;s<9;s++){const r=document.createElement("flip-card");r.classList.add(s),document.querySelector(".container").appendChild(r)}},a={0:[0,1,3,4],1:[0,1,2,3,4,5],2:[1,2,4,5],3:[0,1,3,4,6,7],4:[0,1,2,3,4,5,6,7,8],5:[1,2,4,5,7,8],6:[3,4,6,7],7:[3,4,5,6,7,8],8:[4,5,7,8]};(async()=>{await f();const s=[];for(let o=0;o<10;o++){const e=Math.floor(Math.random()*9);s.push(e)}for(const o of s)d(a[o]);const r=document.querySelectorAll("flip-card");for(const o of r)o.addEventListener("click",e=>n(e.target));const n=o=>{const e=o.classList[0];let t=!1;d(a[e]);const i=[];for(const l of r)i.push(l.returnFlipPosition());switch(i[0]){case"front":t=!i.includes("back");break;case"back":t=!i.includes("front");break}t&&alert("Has ganado!!")}})();const d=s=>{const r=document.querySelectorAll("flip-card");for(const n of s)r[n].rotateCard()};
