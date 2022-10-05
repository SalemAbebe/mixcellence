import React from "react";

//redux
import { useSelector } from "react-redux";

//styles
import "./Success.scss";

function SuccessModal({ successHandler }) {
  const success = useSelector((state) => state.notification.success);

  return (
    <div className="success-modal-container" onClick={successHandler}>
      <p>{success.message}</p>
    </div>
  );
}

export default SuccessModal;
