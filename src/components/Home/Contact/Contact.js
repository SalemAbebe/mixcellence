import React, { useRef, Fragment } from "react";
import ReactDOM from "react-dom";

//components
import ContactEmailInput from "./ContactEmailInput";
import ContactModal from "./ContactModal/ContactModal";
import ContactNameInput from "./ContactNameInput";
import ContactOverlay from "./ContactModal/ContactOverlay";
import ContactSubmitButton from "./ContactSubmitButton";
import ContactTextInput from "./ContactTextInput";

//emailjs
import emailjs from "@emailjs/browser";

//hooks
import { useValidation } from "../../../Hooks/useValidation";

//recaptcha
import ReCAPTCHA from "react-google-recaptcha";

//redux
import { useDispatch, useSelector } from "react-redux";
import { contactActions } from "../../../ReduxStore/slices/ContactSlice";

//styles
import "./Contact.scss";

function Contact() {
  const dispatch = useDispatch();
  const showModal = useSelector((state) => state.contact.modal.showModal);

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
            contactActions.handleShowModal({
              showModal: true,
              message: "Your message has been sent!",
            })
          );
        })
        .catch(() => {
          dispatch(
            contactActions.handleShowModal({
              showModal: true,
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

  const showModalHandler = () => {
    dispatch(
      contactActions.handleShowModal({
        showModal: false,
        message: "",
      })
    );
  };

  return (
    <div className="contact-container">
      <Fragment>
        {showModal &&
          ReactDOM.createPortal(
            <ContactModal showModalHandler={showModalHandler} />,
            document.getElementById("contact-root")
          )}
        {showModal &&
          ReactDOM.createPortal(
            <ContactOverlay showModalHandler={showModalHandler} />,
            document.getElementById("overlay-root")
          )}
      </Fragment>
      <form ref={form} onSubmit={onSubmitHandler} className="contact-form">
        <h2 className="contact-title">Let's mix it up!</h2>
        <div className="input-wrapper">
          <ContactNameInput
            name={name}
            nameClassName={nameClassName}
            nameError={nameError}
            nameOnBlur={nameOnBlur}
            nameOnChange={nameOnChange}
          />
          <ContactEmailInput
            email={email}
            emailClassName={emailClassName}
            emailError={emailError}
            emailOnBlur={emailOnBlur}
            emailOnChange={emailOnChange}
          />
        </div>
        <ContactTextInput
          text={text}
          textClassName={textClassName}
          textError={textError}
          textOnBlur={textOnBlur}
          textOnChange={textOnChange}
        />
        <div className="contact-button-container">
          <ReCAPTCHA ref={reCaptcha} sitekey={siteKey} />
          <ContactSubmitButton />
        </div>
      </form>
    </div>
  );
}

export default Contact;
