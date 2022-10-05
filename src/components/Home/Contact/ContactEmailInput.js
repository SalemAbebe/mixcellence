import React from "react";

function ContactEmailInput({
  email,
  emailClassName,
  emailError,
  emailOnBlur,
  emailOnChange,
}) {
  return (
    <div className="contact-input-control">
      <label className={"contact-input-label " + emailClassName} htmlFor="name">
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
  );
}

export default ContactEmailInput;
