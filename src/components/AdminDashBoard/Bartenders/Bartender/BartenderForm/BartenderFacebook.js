import React, { useState } from "react";

function BartenderFacebook() {
  const checkHandler = (e) => {
    console.log(e);
  };
  return (
    <div className="bartender-form-control">
      <div className="label-wrapper">
        <label htmlFor="facebook">Facebook</label>
        <input
          className="social-media-checkbox"
          type="checkbox"
          onClick={checkHandler}
        />
      </div>
      <input type="text" id="facebook" />
    </div>
  );
}

export default BartenderFacebook;
