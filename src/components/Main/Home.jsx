import React from "react";
import "./Home.css";
import rasm from "./img/rasm-1.png"
import rasm2 from "./img/rasm-2.png"
import rasm3 from "./img/rasm-3.png"
import rasm6 from "./img/rasm-6.png"
import rasm7 from "./img/rasm-7.png"
import rasm8 from "./img/rasm-8.png"


function Home() {
  return (
    <div className="home">

  <section class="hero">
    <div class="hero-text">
      <h1>Transform Your Idea Into Reality with Finsweet</h1>
      <p>The entire Finsweet team knows what's good with Webflow and you can too with 1 week and a good attitude.</p>
      <button>Request Quote</button>
    </div>
    <div class="hero-image">
      <img src={rasm} alt="" />
    </div>
  </section>

  <section class="clients">
    <div class="clients-logos">
     <img src={rasm2} alt="" />
     <img src={rasm3} alt="" />
     <img src={rasm6} alt="" />
     <img src={rasm7} alt="" />
     <img src={rasm8} alt="" />
    </div>
  </section>
    </div>
  );
}

export default Home;
