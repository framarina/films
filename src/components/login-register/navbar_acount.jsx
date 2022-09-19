import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

const navbar_acount = () => {
  return (
    <>
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container-fluid">
          <a className="navbar-brand" href="/">
            <img className="w-10" alt="logo" src="./logo.png" />
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div class="navbar-nav">
              <a class="nav-link active" aria-current="page" href="/">
                Inicio
              </a>
              <a class="nav-link" href="/acceder">
                Iniciar Sesión
              </a>
              <a class="nav-link" href="/registrarse">
                Registrarse
              </a>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default navbar_acount;
