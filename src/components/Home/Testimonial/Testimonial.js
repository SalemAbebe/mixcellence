import React from "react";
import "./Testimonial.scss";
import { testimonialData } from "./TestimonialData";

function Testimonial() {
  return (
    <div className="testimonials-home">
      <div className="testimonials-home-title">
        <h1 className="testimonial-header">What Some have to say</h1>
      </div>
      <div className="testimonials-home-wrapper">
        {testimonialData.map((item, idex) => {
          return (
            <div key={item.id} className="testimonial-home">
              <div className="name">{item.name}</div>
              <div className="about-mixcellence">{item.testimonial}</div>
              <div className="address">{item.cityAndDate}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Testimonial;
