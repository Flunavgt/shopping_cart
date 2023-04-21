import React from 'react';
import kenwood1 from './images/asociados/kenwood.png';
import barret from './images/asociados/barret2.png';
import hytera1 from './images/asociados/hytera1.png';
import icom from './images/asociados/icom.png';
import motorola from './images/asociados/motorola.png';
import sinclairtech from './images/asociados/sinclairtechnologies.webp';
import telewave from './images/asociados/telewave.png';
import terrestrial from './images/asociados/terrestrial.png';
import '../../styles/CrelosaPage-styles/asociados.css';

const Asociados = () => (
  <section id="asociados" className="Main_asociados_container">
    <h2>Nuestras marcas</h2>
    <div className="brands">
      <a className="btn" href="https://www.kenwood.com/pa/" target="blank">
        <img src={kenwood1} alt="kenwood" />
      </a>

      <a className="btn" href="https://www.barrettcommunications.com.au/" target="blank">
        <img src={barret} alt="midland" />
      </a>

      <a className="btn" href="https://www.hytera.mx/radios-de-comunicacion?utm_source=MX_GA_RADIOS&utm_medium=cpc&utm_campaign=mx_two_way_radios&creative=518327665129&keyword=hytera&matchtype=p&network=g&device=c&gclid=CjwKCAjw6IiiBhAOEiwALNqncceCsj4R-49XwTBgLuhBvod0x1hlKpkHhI8oeCRvqNrzvp6pPlMZeBoCnSsQAvD_BwE" target="blank">
        <img src={hytera1} alt="doriginal" />
      </a>

      <a className="btn" href="http://radiosicom.com.mx/" target="blank">
        <img src={icom} alt="doriginal" />
      </a>

      <a className="btn" href="https://www.motorola.com.mx/" target="blank">
        <img src={motorola} alt="doriginal" />
      </a>

      <a className="btn" href="https://www.sinctech.com/?gclid=CjwKCAjw6IiiBhAOEiwALNqncdd-8MOHHLLR6glz09-LMSbY6B27cPCQg21Vzen9X8NXv2FgucyAgxoC2boQAvD_BwE" target="blank">
        <img src={sinclairtech} alt="doriginal" />
      </a>

      <a className="btn" href="https://www.syscom.mx/principal/listadopormarca/TELEWAVE,_INC" target="blank">
        <img src={telewave} alt="doriginal" />
      </a>

      <a className="btn" href="https://www.hytera.la/tetra" target="blank">
        <img src={terrestrial} alt="doriginal" />
      </a>

      {/* <img src={kenwood1} alt="kenwood" /> */}
      {/* <img src={barret} alt="midland" /> */}
      {/* <img src={hytera1} alt="doriginal" /> */}
      {/* <img src={icom} alt="doriginal" /> */}
      {/* <img src={motorola} alt="doriginal" /> */}
      {/* <img src={sinclairtech} alt="doriginal" /> */}
      {/* <img src={telewave} alt="doriginal" /> */}
      {/* <img src={terrestrial} alt="doriginal" /> */}
    </div>
  </section>
);

export default Asociados;
