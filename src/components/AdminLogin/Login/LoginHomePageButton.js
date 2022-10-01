import React from "react";

//react-router
import { NavLink } from "react-router-dom";

function LoginHomePageButton() {
  return (
    <div className="login-home-button-control">
      <NavLink className="login-home-button" to={"/"}>
        Back to home page
      </NavLink>
    </div>
  );
}

export default LoginHomePageButton;
