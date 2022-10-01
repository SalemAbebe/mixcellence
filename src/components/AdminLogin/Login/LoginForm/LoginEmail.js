import React from "react";

function LoginEmail() {
  return (
    <div className="login-form-control">
      <label htmlFor="login-email">Email</label>
      <input
        className="login-input"
        id="login-email"
        placeholder="Enter email..."
        type="text"
      />
    </div>
  );
}

export default LoginEmail;
