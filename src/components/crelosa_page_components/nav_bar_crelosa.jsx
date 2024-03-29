import { Icon } from '@iconify/react';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import * as routes from '../../pages/routes';
import '../../styles/CrelosaPage-styles/NavBarCrelosa.css';
import '../../styles/CrelosaPage-styles/VARIABLES.css';

const NavBarCrelosa = () => {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <>
      {/* Mobil version */}
      {/* <section className="Main_container desktop_navbar">
        <header className="top_line" />

        <section className="NavBarCrelosa_MainContainer"> */}
      {/* <div className="caratula_logo_container">
            <img src={logo} alt="CRELOSA_LOGO Movil version" className="logo_main_img" />
            <h1>hola</h1>
          </div> */}

      {/* <div className="buttons_links_container">
            <a className="btn" href="#cobertura">COBERTURA</a>
            <a className="btn" href="#info_products">PRODUCTOS & SEVICIOS</a>
            <a className="btn" href={routes.store}>TIENDA</a>
            <a className="btn" href="#quienes_somos?">¿QUIENES SOMOS?</a>
            <a className="btn" href="#asociados">SOCIOS</a>
            <a className="btn" href="#piedepagina">CONTACTO</a>
          </div>

        </section>

      </section> */}

      {/* desktop version */}
      <section className="bolita_retorno_container desktop_navbar">
        <div className="bolita_retorno" />
      </section>

      <section className="Main_container">
        <header className="top_line" />

        {/* Icono de hamburguesa */}
        <Icon
          className="size_menuCrelosa_btn"
          icon={showMenu ? 'humbleicons:times' : 'material-symbols:menu-rounded'}
          onClick={() => setShowMenu(!showMenu)}
        />

        <section className={`NavBarCrelosa_MainContainer ${showMenu ? 'null' : 'mobil_navbar'}`}>

          <div className="buttons_links_container">
            <a className="btn" href="#cobertura">COBERTURA</a>
            <a className="btn" href="#info_products">PRODUCTOS & SEVICIOS</a>
            <a className="btn" href={routes.store}>TIENDA</a>
            <Link className="btn" to="/quienes_somos">¿QUIENES SOMOS?</Link>
            <a className="btn" href="#asociados">SOCIOS</a>
            <a className="btn" href="#piedepagina">CONTACTO</a>
          </div>

        </section>

      </section>
    </>
  );
};

export default NavBarCrelosa;
