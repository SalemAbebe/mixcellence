import React from "react";

//components
import About from "../../components/Home/About/About";
import Bartenders from "../../components/Home/Bartenders/Bartenders";
import Footer from "../../components/Home/Footer/Footer";
import Header from "../../components/Home/Header/Header";
import Hero from "../../components/Home/HeroImage/Hero";
import Services from "../../components/Home/Services/Services";
import Testimonial from "../../components/Home/Testimonial/Testimonial";

function Home() {
  return (
    <div>
      <Header />
      <Hero />
      <Services />
      <About />
      <Bartenders />
      <Testimonial />
      <Footer />
    </div>
  );
}

export default Home;
