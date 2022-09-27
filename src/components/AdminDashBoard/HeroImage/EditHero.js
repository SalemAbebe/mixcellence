import React from "react";

//components
import HeroForm from "./HeroForm/HeroForm";
import HeroInputFile from "./HeroInputFile/HeroInputFile";

//styles
import "./EditHero.scss";

function EditHero() {
  return (
    <div className="edit-hero-container">
      <div className="edit-hero-wrapper">
        <h1>Hero Image</h1>
        <span />
        <HeroForm />
        <HeroInputFile />
        <button className="hero-form-button">Save</button>
      </div>
    </div>
  );
}

export default EditHero;
