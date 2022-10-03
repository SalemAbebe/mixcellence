import React from "react";

//components
import Hero from "../../components/Home/HeroImage/Hero";
import Services from "../../components/Home/Services/Services";
import Testimonial from "../../components/Home/Testimonial/Testimonial";

function Home() {
  return (
    <div>
      <Hero />
      <Services />
      <Testimonial />
    </div>
  );
}

export default Home;
