import React from "react";

function LoginSubmitButton() {
  return (
    <div className="login-button-control">
      <button className="login-button" type="submit">
        Log in
      </button>
      <button className="forgot-password">Did you forget your password?</button>
    </div>
  );
}

export default LoginSubmitButton;
