import React from "react";

function BartenderInstagram() {
  return (
    <div className="bartender-form-control">
      <div className="label-wrapper">
        <label htmlFor="instagram">Instagram</label>
        <input className="social-media-checkbox" type="checkbox" />
      </div>
      <input type="text" id="instagram" />
    </div>
  );
}

export default BartenderInstagram;
