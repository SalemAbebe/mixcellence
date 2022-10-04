import React from "react";

//components
import ForgotPassword from "./ForgotPassword/ForgotPassword";
import LoginForm from "./LoginForm/LoginForm";
import LoginHomePageButton from "./LoginHomePageButton";

//redux
import { useSelector } from "react-redux";

//styles
import "./Login.scss";

function Login() {
  const forgotPassword = useSelector((state) => state.login.forgotPassword);

  return (
    <div className="login-container">
      <img
        src={process.env.PUBLIC_URL + "/images/feathers.png"}
        alt="feathers"
      />
      <div className="login-wrapper">
        <h1>MIXELLENCE</h1>
        {forgotPassword ? <ForgotPassword /> : <LoginForm />}
        <LoginHomePageButton />
      </div>
    </div>
  );
}

export default Login;
