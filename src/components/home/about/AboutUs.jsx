import React from 'react';
import './aboutUs.scss';
import mission from '../../crelosa_page_components/images/about/mision.png';
import vision from '../../crelosa_page_components/images/about/vision.png';

const AboutUs = () => (
  <section id="aboutUs" className="mx-3 mx-md-5 mt-4">
    <h1 className="text-center text-primary fw-bold">¿QUIÉNES SOMOS?</h1>
    <div className="line text-center" />
    <p className="text-center description mt-3">
      {/* eslint-disable-next-line max-len */}
      Somos el operador de radiocomunicación troncalizado digital más grande de centro América
      contando con plataforma de la norma de radiocomunicación DMR nivel 3.
      {' '}
    </p>

    <div className="mt-3 mt-md-5">
      {/* mission */}
      <div className="mv-container">
        <div className="box r">
          <img src={mission} alt="Mission" className="imgs b" />
        </div>
        <div className="stack-top-r mt-3 mt-sm-0">
          <div className="mv-card b">
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
        </div>
      </div>
      {/*  vision */}
      <div className="mv-container mt-3 mt-sm-5">
        <div className="box l">
          <img src={vision} alt="Vision" className="imgs b" />
        </div>
        <div className="stack-top-l mt-3 mt-sm-0">
          <div className="mv-card b">
            <h1 className="text-primary fw-bold ">
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
    </div>
  </section>
);

export default AboutUs;
