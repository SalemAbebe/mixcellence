import React from "react";

//styles
import "./Success.scss";

function SuccessOverlay({ successHandler }) {
  return <div className="success-overlay" onClick={successHandler}></div>;
}

export default SuccessOverlay;
