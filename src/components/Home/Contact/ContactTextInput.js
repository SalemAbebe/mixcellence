import React from "react";

function ContactTextInput({
  text,
  textClassName,
  textError,
  textOnBlur,
  textOnChange,
}) {
  return (
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
  );
}

export default ContactTextInput;
