import React from "react";

//components
import AboutHeadingForm from "./AboutHeadingForm/AboutHeadingForm";
import AboutInputFile from "./AboutInputFile/AboutInputFile";

//styles
import "./EditAbout.scss";

function EditAbout() {
  return (
    <div className="edit-about-container">
      <div className="edit-about-wrapper">
        <h1>About</h1>
        <span />
        <AboutHeadingForm />
        <AboutInputFile />
        <button
          className="about-heading-button"
          form="about-form"
          type="submit"
        >
          Save
        </button>
      </div>
    </div>
  );
}

export default EditAbout;
