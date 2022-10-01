import React from "react";

//component
import LoginEmail from "./LoginEmail";
import LoginPassword from "./LoginPassword";
import LoginSubmitButton from "./LoginSubmitButton";

//styles
import "./LoginForm.scss";

function LoginForm() {
  return (
    <div className="login-form-container">
      <div>
        <h1>Welcome Roel!</h1>
      </div>
      <form className="login-form">
        <LoginEmail />
        <LoginPassword />
        <LoginSubmitButton />
      </form>
    </div>
  );
}

export default LoginForm;
