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
      <img src={kenwood1} alt="kenwood" />
      <img src={barret} alt="midland" />
      <img src={hytera1} alt="doriginal" />
      <img src={icom} alt="doriginal" />
      <img src={motorola} alt="doriginal" />
      <img src={sinclairtech} alt="doriginal" />
      <img src={telewave} alt="doriginal" />
      <img src={terrestrial} alt="doriginal" />
    </div>
  </section>
);

export default Asociados;
