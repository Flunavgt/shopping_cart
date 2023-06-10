/* eslint-disable max-len */
import React from 'react';
import '../../styles/CrelosaPage-styles/introduccion.css';
import logo from './images/Introduccion/CRELOSA-01.png';

const Introducción = () => (

  <div className="Main_introduccion_container">

    <div className="videoIntro">
      <video id="videoTest" className="videoTag" autoPlay loop muted>
        <source src="/video/test6.mp4" type="video/mp4" />
      </video>

      <img src={logo} alt="Crelosa logo" className="logo_main_img" />

      <h1 className="titleCompanyintro">
        LA COMUNICACIÓN
        <br />
        NO TIENE LÍMITES
      </h1>
    </div>
  </div>
);
export default Introducción;
