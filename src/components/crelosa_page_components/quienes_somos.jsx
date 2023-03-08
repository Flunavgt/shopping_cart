import React from 'react';
import backgroundmv from './images/backgroundmv.jpg';
import '../../styles/CrelosaPage-styles/quienes_somos.css';

const QuieneSomos = () => (
  <section id="quienes_somos?" className="Main_quienessomos_container">
    <img src={backgroundmv} alt="background" className="backgroundmv" />
    <div className="vismissom">
      <div className="mision">
        <h1>Misión</h1>
        <p>
          En nuestra compañía, nuestra misión
          va más allá de proporcionar soluciones de comunicación confiables y
          eficientes. Nos apasiona ayudar a nuestros clientes a mejorar su
          seguridad, eficiencia y productividad en cada una de sus actividades. Nos
          enorgullece trabajar con innovación contínua y ofrecer un servicio
          excepcional para satisfacer las necesidades únicas de cada cliente.
          Creemos que cada llamada, cada mensaje y cada comunicación es vital en
          situaciones críticas. Es por eso que nuestra misión es mantener la
          excelencia en cada uno de nuestros productos y servicios, para que
          nuestros clientes puedan confiar en nosotros en cualquier situación.
          Nuestro compromiso con la innovación y el servicio al cliente no es solo
          un objetivo, es una forma de vida en nuestra empresa.
        </p>
      </div>
      <div className="vision">
        <h1>Visión</h1>
        <p>
          Nuestra visión es
          mantenernos como líderes en el mercado ofreciendo soluciones de vanguardia
          que permitan a nuestros clientes comunicarse de manera efectiva y segura
          en cualquier situación. Nuestra pasión por ser reconocidos por nuestra
          calidad, confiabilidad y atención al cliente excepcional es lo que nos
          impulsa a ser la mejor opción para nuestros clientes. Nosotros creemos que
          somos mucho más que una compañía de comunicaciones. Somos una empresa que
          se preocupa por sus clientes, por la seguridad y eficiencia de sus
          operaciones. Nos enorgullece ser un empleador que atrae y retiene a los
          mejores profesionales en el campo de las comunicaciones.
        </p>
      </div>
    </div>
  </section>
);

export default QuieneSomos;
