import React from "react";

//styles
import "./ContactModal.scss";

function ContactOverlay({ showModalHandler }) {
  return <div className="contact-overlay" onClick={showModalHandler}></div>;
}

export default ContactOverlay;
