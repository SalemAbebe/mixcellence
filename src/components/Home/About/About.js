import React from "react";

//styles
import "./About.scss";

function About() {
  return (
    <div className="about-container">
      <div className="about-wrapper">
        <h1 className="about-heading">How it all started...</h1>
        <div className="about-img-text-wrapper">
          <img
            src={process.env.PUBLIC_URL + "/images/about/about.png"}
            alt="about"
            className="about-image"
          />
          <div className="text-wrapper">
            <p className="about-text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lectus
              nulla phasellus amet ut pellentesque mauris amet. Pellentesque
              rhoncus eleifend mi ornare risus massa feugiat quis. Pharetra
              rhoncus libero augue fringilla orci in nisi, feugiat. Facilisis
              arcu sed porttitor commodo, sem sagittis risus. Mi pellentesque
              consectetur tristique ipsum in. Urna magnis egestas massa
              consequat eget aliquam. Sed convallis sed rutrum eu mauris et,
              adipiscing. Praesent feugiat erat scelerisque nunc sit in nibh
              egestas praesent. Urna lobortis risus nunc, nunc. Blandit eget
              interdum at sed a, dui quam ullamcorper. Consectetur felis nibh
              nulla ornare augue amet malesuada arcu, hac. Proin etiam purus,
              urna accumsan.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
