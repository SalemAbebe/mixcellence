import React from "react";

//components
import ForgotPassword from "./ForgotPassword/ForgotPassword";
import LoginForm from "./LoginForm/LoginForm";
import LoginHomePageButton from "./LoginHomePageButton";

//styles
import "./Login.scss";

function Login() {
  return (
    <div className="login-container">
      <img
        src={process.env.PUBLIC_URL + "/images/feathers.png"}
        alt="feathers"
      />
      <div className="login-wrapper">
        <h1>MIXELLENCE</h1>
        {true ? <LoginForm /> : <ForgotPassword />}
        <LoginHomePageButton />
      </div>
    </div>
  );
}

export default Login;
