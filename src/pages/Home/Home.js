import React from "react";
import Events from "../../components/Home/Events/Events";
import FAQ from "../../components/Home/FAQ/FAQ";

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
      <Events />
      <FAQ />
    </div>
  );
}

export default Home;
