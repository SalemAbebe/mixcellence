import React from "react";

//components
import About from "../../components/Home/About/About";
import Bartenders from "../../components/Home/Bartenders/Bartenders";
import Hero from "../../components/Home/HeroImage/Hero";
import Services from "../../components/Home/Services/Services";
import Testimonial from "../../components/Home/Testimonial/Testimonial";

function Home() {
  return (
    <div>
      <Hero />
      <Services />
      <About />
      <Bartenders />
      <Testimonial />
    </div>
  );
}

export default Home;
