import React from "react";

function BartenderTwitter() {
  return (
    <div className="bartender-form-control">
      <div className="label-wrapper">
        <label htmlFor="facebook">Twitter</label>
        <input className="social-media-checkbox" type="checkbox" />
      </div>
      <input type="text" id="facebook" />
    </div>
  );
}

export default BartenderTwitter;
