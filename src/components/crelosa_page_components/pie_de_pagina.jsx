/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { Link } from 'react-router-dom';
import {
  FaFacebookF,
  FaTwitter,
  FaYoutube,
  FaInstagram,
  FaWhatsapp,
} from 'react-icons/fa';
import { BsEnvelopeAt } from 'react-icons/bs';
import { GoDeviceMobile, GoLocation } from 'react-icons/go';
import crelosa from './images/Introduccion/LOGO1.png';
import '../../styles/CrelosaPage-styles/pie_de_pagina.css';
import WhatsappIcon from './whatsapp_business_logo';

const PieDePagina = () => (
  <div className="crelosaGeneral" id="piedepagina">
    <WhatsappIcon />
    <div className="general_footer">

      <div className="terminos">
        <h2 className="titulo_contenedores">Términos y condiciones</h2>
        <a href="https://crelosa.com/terminos-y-condiciones/">- Términos y condiciones</a>
        <a href="https://crelosa.com/terminos-y-condiciones/">- Garantía</a>
        <a href="https://crelosa.com/terminos-y-condiciones/">- Privacidad</a>
        <Link to="/quienes_somos">- Mision y Visión</Link>
      </div>

      <div className="generalesCrelosa">
        <h2 className="titulo_contenedores">Generales</h2>
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
            PBX: (502) 2333 4620  o  (502) 2313 7200
          </p>
        </div>
      </div>

      <div className="social">
        <h2 className="titulo_contenedores">Contactáctanos</h2>
        <div className="social_container_logo">
          <img
            src={crelosa}
            alt="CRELOSA_LOGO"
            className="logo_main"
          />
        </div>
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
              <FaInstagram />
            </a>
            <a
              href="https://api.whatsapp.com/send?phone=50231017755"
              target="_blank"
              rel="noreferrer"
            >
              <FaWhatsapp color="green" />

            </a>
            <div className="crelosaMail">
              <a href="mailto:ventas@crelosa.com" target="_blank" rel="noreferrer">
                <BsEnvelopeAt />
              </a>
            </div>
          </div>
        </div>
      </div>

    </div>
  </div>
);

export default PieDePagina;
