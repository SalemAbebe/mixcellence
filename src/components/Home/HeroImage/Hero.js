import React from "react";

//styles
import "./Hero.scss";

function Hero() {
  return (
    <div id="hero" className="hero-container">
      <div className="hero-img-wrapper">
        <img
          className="hero-img"
          src={process.env.PUBLIC_URL + "/images/hero/hero.png"}
          alt="hero"
        />
      </div>

      <div className="hero-wrapper">
        <p className="hero-heading">MIXELLENCE</p>
        <p className="hero-sub-heading">Mobile Bar Event Bartending</p>
        <div className="hero-book-us-button-wrapper">
          <a href="#book-us">Book us!</a>
        </div>
      </div>
    </div>
  );
}

export default Hero;
