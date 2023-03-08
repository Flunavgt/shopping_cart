/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import {
  FaFacebookF,
  FaTwitter,
  FaYoutube,
  FaInstagram,
} from 'react-icons/fa';
import { BsEnvelopeAt } from 'react-icons/bs';
import { GoDeviceMobile, GoLocation } from 'react-icons/go';
import '../../styles/CrelosaPage-styles/pie_de_pagina.css';

const PieDePagina = () => (
  <div className="crelosaGeneral">
    {/* <div className="social">
      <h2>Información de contacto</h2>
      <img
        src="https://crelosa.com/wp-content/uploads/2019/11/logo.jpg"
        alt="CRELOSA_LOGO"
        className="logo_main"
      />
      <div>
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
          <div className="crelosaMail">
            <a href="mailto:crelosa@crelosa.com" target="_blank" rel="noreferrer">
              <FaEnvelope />
            </a>
          </div>
        </div>
      </div>
    </div> */}
    <div className="terminos">
      <h2>Términos y condiciones</h2>
      <a
        href="https://www.instagram.com/crelosagua/?hl=en"
        className="invisibleCre"
      >
        <FaInstagram className="invisibleCre" />
      </a>
      <a href="https://crelosa.com/terminos-y-condiciones/">
        - Términos y condiciones
      </a>
      <a href="https://crelosa.com/terminos-y-condiciones/">- Garantía</a>
      <a href="https://crelosa.com/terminos-y-condiciones/">- Privacidad</a>
    </div>
    <div className="generalesCrelosa">
      <h2>Generales</h2>
      <br />
      <div className="contactodirecciones">
        <div>
          <h4>* Atención a clientes:</h4>
          <p>
            <GoLocation className="iconoEspacio" />
            9na. calle 3-29 zona 14 Colonia El
            Campo.
          </p>
        </div>
        <div>
          <h4>* Oficina Corporativa:</h4>
          <p>
            <GoLocation className="iconoEspacio" />
            3ra. avenida 8-66 zona 14 Colonia El
            Campo.
          </p>
        </div>
        <p>
          <GoDeviceMobile className="iconoEspacio" />
          PBX:(502) 2333 4620
        </p>
      </div>
      {/* <p> Horarios:</p>
      <p> Lunes a Viernes</p>
      <p> 8:00 am a 5:00 pm</p> */}
      {/* <div className="crelosaMail">
        <FaEnvelope />
        <a href="mailto:crelosa@crelosa.com" target="_blank" rel="noreferrer">
          Crelosa
        </a>
      </div> */}
    </div>
    <div className="social">
      <h2>Información de contacto</h2>
      <img
        src="https://crelosa.com/wp-content/uploads/2019/11/logo.jpg"
        alt="CRELOSA_LOGO"
        className="logo_main"
      />
      <div>
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
          <div className="crelosaMail">
            <a href="mailto:crelosa@crelosa.com" target="_blank" rel="noreferrer">
              <BsEnvelopeAt />
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
  // </section>
);

export default PieDePagina;
