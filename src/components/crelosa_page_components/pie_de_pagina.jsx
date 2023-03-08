/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import {
  FaFacebookF,
  FaTwitter,
  FaYoutube,
  FaInstagram,
  FaEnvelope,
} from 'react-icons/fa';
import { GoDeviceMobile, GoLocation } from 'react-icons/go';
import '../../styles/CrelosaPage-styles/pie_de_pagina.css';

const PieDePagina = () => (
  // <section id="piedepagina" className="Main_piedepagina_container">
  <div className="crelosaGeneral">
    <div className="social">
      <h2>Información de contacto</h2>
      <img
        src="https://crelosa.com/wp-content/uploads/2019/11/logo.jpg"
        alt="CRELOSA_LOGO"
        className="logo_main"
      />
      <div>
        <p>
          <GoLocation className="iconoEspacio" />
          9 calle 3-29 zona 14 Colonia El
          Campo, Guatemala.
        </p>
        <p>
          <GoDeviceMobile className="iconoEspacio" />
          PBX:(502) 2333 4620
        </p>
        <div className="sNetworks">
          <a href="https://www.facebook.com/people/Crelosa/100064049460071/">
            <FaFacebookF style={{ color: '#4267B2' }} />
          </a>
          <a href="https://twitter.com/crelosagt">
            <FaTwitter style={{ color: '#1DA1F2' }} />
          </a>
          <a href="https://www.youtube.com/channel/UCKO7Og-r4lviwFcaXUNDNLA">
            <FaYoutube style={{ color: '#FF0000' }} />
          </a>
          <a href="https://www.instagram.com/crelosagua/?hl=en">
            <FaInstagram className="instagram" />
          </a>
        </div>
      </div>
    </div>
    <div className="terminos">
      <h2>Terminos y condiciones</h2>
      <a
        href="https://www.instagram.com/crelosagua/?hl=en"
        className="invisibleCre"
      >
        <FaInstagram className="invisibleCre" />
      </a>
      <a href="https://crelosa.com/terminos-y-condiciones/">
        Terminos y condiciones
      </a>
      <a href="https://crelosa.com/terminos-y-condiciones/">Garantía</a>
      <a href="https://crelosa.com/terminos-y-condiciones/">Privacidad</a>
    </div>
    <div className="generalesCrelosa">
      <h2>Generales</h2>
      <p> Horarios:</p>
      <p> Lunes a Viernes</p>
      <p> 8:00 am a 5:00 pm</p>
      <div className="crelosaMail">
        <FaEnvelope />
        <a href="mailto:crelosa@crelosa.com" target="_blank" rel="noreferrer">
          Crelosa
        </a>
      </div>
    </div>
  </div>
  // </section>
);

export default PieDePagina;
