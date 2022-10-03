import React from "react";

//redux
import { useDispatch } from "react-redux";
import { loginActions } from "../../../../ReduxStore/slices/LoginSlice";

function LoginSubmitButton() {
  const dispatch = useDispatch();

  const forgotPasswordHandler = () => {
    dispatch(loginActions.handleForgotPassword());
  };

  return (
    <div className="login-button-control">
      <button className="login-button" type="submit">
        Log in
      </button>
      <button
        type="button"
        className="forgot-password"
        onClick={forgotPasswordHandler}
      >
        Did you forget your password?
      </button>
    </div>
  );
}

export default LoginSubmitButton;
