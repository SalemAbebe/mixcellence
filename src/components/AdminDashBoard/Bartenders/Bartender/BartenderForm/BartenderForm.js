import React from "react";

//component
import BartenderFacebook from "./BartenderFacebook";
import BartenderHeading from "./BartenderHeading";
import BartenderInstagram from "./BartenderInstagram";
import BartenderSubHeading from "./BartenderSubHeading";
import BartenderTextArea from "./BartenderTextArea";
import BartenderTwitter from "./BartenderTwitter";

//styles
import "./BartenderForm.scss";

function BartenderForm({ index, onSubmitHandler }) {
  return (
    <form className="bartender-form" id={index} onSubmit={onSubmitHandler}>
      <BartenderHeading />
      <BartenderSubHeading />
      <BartenderTextArea />
      <BartenderInstagram />
      <BartenderTwitter />
      <BartenderFacebook />
    </form>
  );
}

export default BartenderForm;
