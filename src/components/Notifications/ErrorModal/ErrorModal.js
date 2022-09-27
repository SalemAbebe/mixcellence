import React from "react";

//styles
import "./Error.scss";

//redux
import { useSelector } from "react-redux";

function ErrorModal({ errorHandler }) {
  const error = useSelector((state) => state.notification.error);

  return (
    <div className="error-modal-container" onClick={errorHandler}>
      <p>{error.message}</p>
    </div>
  );
}

export default ErrorModal;
