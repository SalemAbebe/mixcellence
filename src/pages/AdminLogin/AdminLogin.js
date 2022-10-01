import React from "react";

//react-router
import { Outlet } from "react-router-dom";

//styles
import "./AdminLogin.scss";

function AdminLogin() {
  return (
    <div className="admin-login-container">
      <Outlet />
    </div>
  );
}

export default AdminLogin;
