import React from "react";

function LoginPassword() {
  return (
    <div className="login-form-control">
      <label htmlFor="login-password">Password</label>
      <input
        className="login-input"
        id="login-password"
        placeholder="Enter password..."
        type="text"
      />
    </div>
  );
}

export default LoginPassword;
