import React from "react";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <a className="navbar-brand" href="/">
          <img className="w-10" alt="logo" src="/logo.png" />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <a className="nav-link active" aria-current="page" href="/">
              Inicio
            </a>
            {/* <a class="nav-link" href="/pajaros">
              Mis pájaros
            </a> */}
            {/* <a class="nav-link" href="/acceder">
              Mi Cuenta
            </a> */}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
