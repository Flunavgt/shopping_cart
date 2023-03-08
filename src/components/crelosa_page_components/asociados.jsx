import React from 'react';
import kenwood from './images/kenwood.jpeg';
import midland from './images/Midland.jpeg';
import hytera from './images/hytera.png';
import doriginal from './images/doriginal.jpeg';
import panorama from './images/panorama.png';
import '../../styles/CrelosaPage-styles/asociados.css';

const Asociados = () => (
  <section id="asociados" className="Main_asociados_container">
    <div className="brands">
      <img src={kenwood} alt="kenwood" />
      <img src={midland} alt="midland" />
      <img src={hytera} alt="hytera" />
      <img src={doriginal} alt="doriginal" />
      <img src={panorama} alt="doriginal" />
    </div>
  </section>
);

export default Asociados;
