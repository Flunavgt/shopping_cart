/* eslint-disable arrow-body-style */
import React from 'react';
import '../../styles/CrelosaPage-styles/introduccion.css';
import logo from './images/Introduccion/crelosa_logo.png';

const Introducción = () => {
  return (
    <div className="Main_introduccion_container">
      <div className="videoIntro">
        <video className="videoTag" autoPlay loop muted>
          <source
            src="/video/hd1000.mp4"
            type="video/mp4"
          />
        </video>
        <img src={logo} alt="Crelosa logo" className="logo_main_img" />
        <h1 className="titleCompanyintro">
          Líder en
          <span>Comunicaciones</span>
        </h1>
        <div className="infoCompany">
          <p>
            Somos el operador de radiocomunicación troncalizado digital más
            grande de centro América contando con plataforma de la norma de
            radiocomunicación DMR nivel 3.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Introducción;
