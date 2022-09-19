import React from "react";
import Login from "../../../components/login-register/login_component";
import NavbarAcount from "../../../components/login-register/navbar_acount";

const LoginPage = () => {
  return (
    <>
      <NavbarAcount />
      <div className="auth-wrapper">
        <div className="auth-inner">
          <Login />
        </div>
      </div>
    </>
  );
};

export default LoginPage;
