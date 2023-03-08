import React from 'react';
import * as routes from '../../pages/routes';
import '../../styles/CrelosaPage-styles/NavBarCrelosa.css';
import '../../styles/CrelosaPage-styles/VARIABLES.css';

const NavBarCrelosa = () => (
  <>
    <section className="Main_container">
      <header className="top_line" />

      <section className="NavBarCrelosa_MainContainer">
        <div className="caratula_logo_container">
          <img src="https://crelosa.com/wp-content/uploads/2019/11/logo.jpg" alt="CRELOSA_LOGO" className="logo_main_img" />
        </div>

        <div className="buttons_links_container">
          <a className="btn" href="#/">INICIO</a>
          <a className="btn" href="#info_products">PRODUCTOS & SEVICIOS</a>
          <a className="btn" href={routes.store}>TIENDA</a>
          <a className="btn" href="#quienes_somos?">¿QUIENES SOMOS?</a>
          <a className="btn" href="#asociados">SOCIOS</a>
          <a className="btn" href="#piedepagina">CONTACTO</a>
        </div>

      </section>

    </section>

    <section className="bolita_retorno_container">
      <div className="bolita_retorno" />
    </section>

  </>
);

export default NavBarCrelosa;
