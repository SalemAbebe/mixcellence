import React from "react";

//styles
import "./Error.scss";

function ErrorOverlay({ errorHandler }) {
  return <div className="error-overlay" onClick={errorHandler}></div>;
}

export default ErrorOverlay;
