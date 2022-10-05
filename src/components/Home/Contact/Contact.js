import React, { useRef } from "react";

//emailjs
import emailjs from "@emailjs/browser";

//hooks
import { useValidation } from "../../../Hooks/useValidation";

//recaptcha
import ReCAPTCHA from "react-google-recaptcha";

//redux
import { useDispatch } from "react-redux";
import { notificationActions } from "../../../ReduxStore/slices/NotificationSlice";

//styles
import "./Contact.scss";

function Contact() {
  const dispatch = useDispatch();
  const {
    value: name,
    isValid: nameValid,
    error: nameError,
    handleOnBlur: nameOnBlur,
    handleOnChange: nameOnChange,
    reset: nameReset,
  } = useValidation((value) => value.trim() !== "");
  const {
    value: email,
    isValid: emailValid,
    error: emailError,
    handleOnBlur: emailOnBlur,
    handleOnChange: emailOnChange,
    reset: emailReset,
  } = useValidation((value) => value.includes("@"));
  const {
    value: text,
    isValid: textValid,
    error: textError,
    handleOnBlur: textOnBlur,
    handleOnChange: textOnChange,
    reset: textReset,
  } = useValidation((value) => value.trim() !== "");
  const form = useRef();
  const reCaptcha = useRef();
  const serviceKey = process.env.REACT_APP_EMAILJS_SERVICE_KEY;
  const siteKey = process.env.REACT_APP_RECAPTCHA_SITE_KEY;
  const templateKey = process.env.REACT_APP_EMAILJS_TEMPLATE_KEY;

  let formIsValid = false;

  if (emailValid && nameValid && textValid) {
    formIsValid = true;
  }

  const onSubmitHandler = (e) => {
    e.preventDefault();
    const token = reCaptcha.current.getValue();
    console.log(name, email, text);
    if (token && formIsValid) {
      emailjs
        .sendForm(
          serviceKey,
          templateKey,
          form.current,
          process.env.REACT_APP_EMAILJS_PUBLIC_KEY
        )
        .then((res) => {
          dispatch(
            notificationActions.handleSuccess({
              isSuccess: true,
              message: "Your message has been sent!",
            })
          );
        })
        .catch(() => {
          dispatch(
            notificationActions.handleError({
              isError: true,
              message: "Your message has not been sent!",
            })
          );
        });
      emailReset();
      nameReset();
      reCaptcha.current.reset();
      textReset();
    }
  };

  const emailClassName = emailError ? "error" : null;
  const nameClassName = nameError ? "error" : null;
  const textClassName = textError ? "error" : null;

  return (
    <div className="contact-container">
      <form ref={form} onSubmit={onSubmitHandler} className="contact-form">
        <h2 className="contact-title">Let's mix it up!</h2>
        <div className="input-wrapper">
          <div className="contact-input-control">
            <label
              className={"contact-input-label " + nameClassName}
              htmlFor="name"
            >
              Name
            </label>
            <input
              className={"contact-input " + nameClassName}
              id="name"
              name="name"
              type="text"
              value={name}
              onBlur={nameOnBlur}
              onChange={nameOnChange}
            />
            {nameError && (
              <p className="input-error-message">Please enter a name!</p>
            )}
          </div>
          <div className="contact-input-control">
            <label
              className={"contact-input-label " + emailClassName}
              htmlFor="name"
            >
              Email
            </label>
            <input
              className={"contact-input " + emailClassName}
              id="email"
              name="email"
              type="email"
              value={email}
              onBlur={emailOnBlur}
              onChange={emailOnChange}
            />
            {emailError && (
              <p className="input-error-message">Please enter an email!</p>
            )}
          </div>
        </div>
        <div className="contact-text-control">
          <label
            className={"contact-text-label " + textClassName}
            htmlFor="contact-text"
          >
            Message
          </label>
          <textarea
            className={"contact-text " + textClassName}
            cols="30"
            id="contact-text"
            name="text"
            rows="10"
            value={text}
            onBlur={textOnBlur}
            onChange={textOnChange}
          ></textarea>
          {textError && (
            <p className="text-error-message">Please fill out a message</p>
          )}
        </div>
        <div className="contact-button-container">
          <ReCAPTCHA
            ref={reCaptcha}
            sitekey="6LfnHlUiAAAAAAml0gPOoQMPHQW63zTXDsTpOm-Y"
          />
          <div className="contact-submit-button-wrapper">
            <button className="contact-submit-button">Submit</button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default Contact;
