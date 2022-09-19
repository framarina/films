import React from "react";
import Register from "../../../components/login-register/register_component";
import NavbarAcount from "../../../components/login-register/navbar_acount";

const RegisterPage = () => {
    return (
        <>
            <NavbarAcount />
            <div className="auth-wrapper">
                <div className="auth-inner">
                    <Register />
                </div>
            </div>
        </>
    );
};

export default RegisterPage;
