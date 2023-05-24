import React from 'react';
import './navbar.scss';
// import logo from '../../crelosa_page_components/images/Introduccion/CRELOSA-01.png';

const Navbar = () => (
  <>
    <nav className="vw-100 navbar navbar-expand-lg fixed-top navbar-dark bg-primary">
      <div className="mx-4 container-fluid">
        {/* <a className="navbar-brand p-0" href="#home"> */}
        {/* eslint-disable-next-line max-len */}
        {/*  <img src={logo} alt="Crelosa logo" className="d-inline-block align-text-top" width="120" height="70" /> */}
        {/* </a> */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
          <ul className="navbar-nav w-75 justify-content-between">
            <li className="nav-item">
              <a className="nav-link" aria-current="page" href="#aboutUs">¿QUIÉNES SOMOS?</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#products">PRODUCTOS & SERVICIOS</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#cover">COBERTURA</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#store">TIENDA</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#partners">SOCIOS</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#contact">CONTACTO</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </>
);

export default Navbar;
