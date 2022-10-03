import React from "react";
import Events from "../../components/Home/Events/Events";
import FAQ from "../../components/Home/FAQ/FAQ";
import Testimonial from "../../components/Home/Testimonial/Testimonial";

function Home() {
  return (
    <div>
      Home
      <Testimonial />
      <Events />
      <FAQ />
    </div>
  );
}

export default Home;
