import React from "react";
import "./Company.css";
import rasm9 from "./img/rasm-9.png"
import rasm10 from "./img/rasm-10.png"
import rasm11 from "./img/rasm-11.png"
import rasm12 from "./img/rasm-12.png"
import rasm13 from "./img/rasm-13.png"
import rasm14 from "./img/rasm-14.png"
import rasm15 from "./img/rasm-15.png"
import rasm16 from "./img/rasm-16.png"

function Company() {
  return (
    <div className="company">

  <section class="company">
    <div class="container">
      <div class="text-content">
        <h3>Company</h3>
        <h1>Award-winning Companyseen and used by millionsaround the world.</h1>
        <p>
          It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The Maker is a decentralized.
        </p>
      </div>
      <div class="images">
        <div class="image"><img src={rasm9} alt="" /></div>
        <div class="image"><img src={rasm10} alt="" /></div>
        <div class="image"><img src={rasm11} alt="" /></div>
      </div>
    </div>
  </section>


  <section class="story">
    <div class="container">
      <div class="text-content">
        <h4>Our Story ✦</h4>
        <h2>From Startups to Titans of Industry</h2>
        <p>
          Through True Rich Attended does no end it his mother since favourable real had half every him case in packages enquire we up ecstatic unsatiable. She doing Roman expenses on gray produce exposed perceived no. At do spring meals to so when. In explained Hearts am next over match mr partiality not shoud latter thus our no passed forming middleton exercise up.
        </p>
      </div>
      <div class="stats">
        <div class="stat">
          <h3>1560+</h3>
          <p>Project Delivered</p>
        </div>
        <div class="stat">
          <h3>100+</h3>
          <p>Professional</p>
        </div>
        <div class="stat">
          <h3>950+</h3>
          <p>Happy Client</p>
        </div>
        <div class="stat">
          <h3>10 yrs</h3>
          <p>Experience</p>
        </div>
      </div>
    </div>
    <div class="logos">
      <img src={rasm12} alt="" />
      <img src={rasm13} alt="" />
      <img src={rasm14} alt="" />
      <img src={rasm15} alt="" />
      <img src={rasm16} alt="" />
    </div>
  </section>

    </div>
  );
}

export default Company;
