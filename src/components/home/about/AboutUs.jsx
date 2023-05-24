import React from 'react';
import './aboutUs.scss';
import logo from '../../crelosa_page_components/images/Introduccion/CRELOSA-01.png';

const AboutUs = () => (
  <section id="aboutUs" className="m-4">
    <h1 className="text-center text-primary fw-bold">¿QUIÉNES SOMOS?</h1>
    <div className="line text-center" />
    <p className="text-center description mt-3">
      {/* eslint-disable-next-line max-len */}
      Somos el operador de radiocomunicación troncalizado digital más grande de centro América
      contando con plataforma de la norma de radiocomunicación DMR nivel 3.
      {' '}
    </p>

    <div className="m-4">
      {/* mission */}
      <div className="row row-cols-1 row-cols-md-2">
        <div className="col py-3 mv-card">
          <h1 className="text-primary fw-bold">
            MISIÓN
          </h1>
          <p className="description">
            {/* eslint-disable-next-line max-len */}
            Vamós más allá de proporcionar soluciones de comunicación confiables y eficientes. Nos apasiona mejorar la
            seguridad, eficiencia y productividad en cada una de las actividades de comunicación.
            <br />
            <br />
            {/* eslint-disable-next-line max-len */}
            Creemos que cada llamada y cada mensaje es vital en situaciones críticas. Por ello, mantener la excelencia
            {/* eslint-disable-next-line max-len */}
            en cada uno de nuestros productos y servicios, el compromiso con la innovación y el servicio al cliente no
            es una opción, es nuestra misión
          </p>
        </div>
        <div className="col">
          <img src={logo} alt="Crelosa logo" className="logo_main_img" />
        </div>
      </div>
      {/*  vision */}
      <div className="row row-cols-1 row-cols-md-2 mt-3">
        <div className="col">
          <img src={logo} alt="Crelosa logo" className="logo_main_img" />
        </div>
        <div className="col py-3 mv-card">
          <h1 className="text-primary fw-bold">
            VISIÓN
          </h1>
          <p className="description">
            {/* eslint-disable-next-line max-len */}
            Nuestra pasión por ser reconocidos por nuestra calidad, confiabilidad y atención al cliente es lo que nos
            impulsa a ser la mejor opción para nuestros clientes.
            <br />
            <br />
            {/* eslint-disable-next-line max-len */}
            Mantenernos como líderes en el mercado ofreciendo soluciones de vanguardia que den paso a comunicaciones de
            manera efectiva y segura en cualquier situación es lo que define nuestra visión
          </p>
        </div>
      </div>
    </div>
  </section>
);

export default AboutUs;
