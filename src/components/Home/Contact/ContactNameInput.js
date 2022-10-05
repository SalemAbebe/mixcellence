import React from "react";

function ContactNameInput({
  name,
  nameClassName,
  nameError,
  nameOnBlur,
  nameOnChange,
}) {
  return (
    <div className="contact-input-control">
      <label className={"contact-input-label " + nameClassName} htmlFor="name">
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
      {nameError && <p className="input-error-message">Please enter a name!</p>}
    </div>
  );
}

export default ContactNameInput;
