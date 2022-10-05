import React from "react";

//components
import About from "../../components/Home/About/About";
import Bartenders from "../../components/Home/Bartenders/Bartenders";
import Contact from "../../components/Home/Contact/Contact";
import Events from "../../components/Home/Events/Events";
import FAQ from "../../components/Home/FAQ/FAQ";
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
      <Events />
      <FAQ />
      <Contact />
      <Footer />
    </div>
  );
}

export default Home;
