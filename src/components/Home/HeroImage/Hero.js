import React from "react";

//styles
import "./Hero.scss";

function Hero() {
  return (
    <div className="hero-container">
      <div className="hero-img-wrapper">
        <img
          className="hero-img"
          src={process.env.PUBLIC_URL + "/images/hero/hero.png"}
          alt="hero"
        />
      </div>

      <div className="hero-wrapper">
        <h1 className="hero-heading">MIXELLENCE</h1>
        <h3 className="hero-sub-heading">Mobile Bar Event Bartending</h3>
        <div className="hero-book-us-button-wrapper">
          <a href="#book-us">Book us!</a>
        </div>
      </div>
    </div>
  );
}

export default Hero;
