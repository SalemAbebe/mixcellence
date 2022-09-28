import React from "react";
import "./Testimonial.scss";

function Testimonial() {
  return (
    <div className="testimonials-home">
      <div className="testimonials-home-title">
        <h1>What Some have to say</h1>
      </div>
      <div className="testimonials-home-wrapper">
        <div className="testimonials-home">
          <div className="name">xx</div>
          <div className="about-mixcellence"></div>
          <div className="address"></div>
        </div>
        <div className="testimonials-home">
          <div className="name"></div>
          <div className="about-mixcellence"></div>
          <div className="address"></div>
        </div>
        <div className="testimonials-home">
          <div className="name"></div>
          <div className="about-mixcellence"></div>
          <div className="address"></div>
        </div>
      </div>
    </div>
  );
}

export default Testimonial;
