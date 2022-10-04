import React, { useRef } from "react";

//recaptcha
import ReCAPTCHA from "react-google-recaptcha";

//styles
import "./Contact.scss";

function Contact() {
  const reCaptcha = useRef();
  const siteKey = process.env.REACT_APP_SITE_KEY;

  const onSubmitHandler = (e) => {
    e.preventDefault();
    const token = reCaptcha.current.getValue();
    console.log(token);
    reCaptcha.current.reset();
  };

  console.log(siteKey);

  return (
    <div className="contact-container">
      <form onSubmit={onSubmitHandler} className="contact-form">
        <h2 className="contact-title">Let's mix it up!</h2>
        <div className="input-wrapper">
          <div className="contact-input-control">
            <label className="contact-input-label" htmlFor="name">
              Name
            </label>
            <input className="control-input" type="text" id="name" />
          </div>
          <div className="contact-input-control">
            <label className="contact-input-label" htmlFor="name">
              Email
            </label>
            <input className="control-input" type="email" id="email" />
          </div>
        </div>
        <div className="contact-text-control">
          <label className="contact-text-label" htmlFor="contact-text">
            Message
          </label>
          <textarea
            id="contact-text"
            cols="30"
            rows="10"
            className="contact-text"
          ></textarea>
        </div>
        <div className="contact-button-container">
          <ReCAPTCHA ref={reCaptcha} sitekey={process.env.REACT_APP_SITE_KEY} />
          <div className="contact-submit-button-wrapper">
            <button className="contact-submit-button">Submit</button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default Contact;
