import React from "react";

//component
import LoginEmail from "./LoginEmail";
import LoginPassword from "./LoginPassword";
import LoginSubmitButton from "./LoginSubmitButton";

//react router
import { useNavigate } from "react-router-dom";

//styles
import "./LoginForm.scss";

function LoginForm() {
  const navigate = useNavigate();

  const onSubmitHandler = (e) => {
    e.preventDefault();
    navigate("/admin", { replace: true });
  };

  return (
    <div className="login-form-container">
      <div>
        <h1>Welcome Roel!</h1>
      </div>
      <form className="login-form" onSubmit={onSubmitHandler}>
        <LoginEmail />
        <LoginPassword />
        <LoginSubmitButton />
      </form>
    </div>
  );
}

export default LoginForm;
