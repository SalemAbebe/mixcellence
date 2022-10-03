import React from "react";

//redux
import { useDispatch } from "react-redux";
import { loginActions } from "../../../../ReduxStore/slices/LoginSlice";

//styles
import "./ForgotPassword.scss";

function ForgotPassword() {
  const dispatch = useDispatch();
  const forgotPasswordHandler = () => {
    dispatch(loginActions.handleForgotPassword());
  };

  return (
    <div className="forgot-password-container">
      <div className="forgot-title-wrapper">
        <h1 className="forgot-title">Ohh Nooo!</h1>
        <p className="forgot-text">(hope you don't fall)</p>
      </div>
      <form className="forgot-form">
        <div className="forgot-email-control">
          <label htmlFor="forgot-email">Email</label>
          <input type="text" id="forgot-email" className="forgot-email-input" />
        </div>
        <button
          className="forgot-submit-button"
          onClick={forgotPasswordHandler}
        >
          send to email
        </button>
      </form>
    </div>
  );
}

export default ForgotPassword;
