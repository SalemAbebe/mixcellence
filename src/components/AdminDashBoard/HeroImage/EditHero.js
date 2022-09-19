import React from "react";

//components
import HeroForm from "./HeroForm/HeroForm";
import HeroInputFile from "./HeroInputFile/HeroInputFile";

//styles
import "./EditHero.scss";

function EditHero() {
  return (
    <div className="edit-hero-container">
      <h1>Hero Image</h1>
      <span />
      <HeroForm />
      <HeroInputFile />
    </div>
  );
}

export default EditHero;
