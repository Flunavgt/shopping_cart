/* eslint-disable max-len */
import React, { useState } from 'react';
import '../../styles/CrelosaPage-styles/introduccion.css';
import logo from './images/Introduccion/CRELOSA-01.png';

const Introducción = () => {
  const [lastclicked, setLastiClicked] = useState('');

  const distwo = (input) => {
    const message = [{
      cartel_one: document.querySelector('.dissapearone'),
      cartel_two: document.querySelector('.dissapeartwo'),
      cartel_three: document.querySelector('.dissapearthree'),
    }];
    if (lastclicked === input) {
      message[0].cartel_one.style.display = 'none';
      message[0].cartel_two.style.display = 'none';
      message[0].cartel_three.style.display = 'none';
      setLastiClicked('');
    } else {
      if (input === '.dissapearone') {
        message[0].cartel_one.style.display = 'block';
        message[0].cartel_two.style.display = 'none';
        message[0].cartel_three.style.display = 'none';
      }
      if (input === '.dissapeartwo') {
        message[0].cartel_one.style.display = 'none';
        message[0].cartel_two.style.display = 'block';
        message[0].cartel_three.style.display = 'none';
      }
      if (input === '.dissapearthree') {
        message[0].cartel_one.style.display = 'none';
        message[0].cartel_two.style.display = 'none';
        message[0].cartel_three.style.display = 'block';
      }

      setLastiClicked(input);
    }
  };

  return (
    <div className="Main_introduccion_container">

      <div className="videoIntro">
        <video id="videoTest" className="videoTag" autoPlay loop muted>
          <source src="/video/test6.mp4" type="video/mp4" />
        </video>

        <img src={logo} alt="Crelosa logo" className="logo_main_img" />

        <h1 className="titleCompanyintro">
          Lider en comunicaciones
        </h1>

        <div className="containerBtnDmr">
          <button onClick={() => distwo('.dissapearone')} type="button" className="disTwo">
            <h2>DMR</h2>
          </button>

          <button onClick={() => distwo('.dissapeartwo')} type="button" className="disTwo">
            <h2>DMR III</h2>
          </button>
          <button onClick={() => distwo('.dissapearthree')} type="button" className="disTwo">
            <h2>Microonda</h2>
          </button>
        </div>
        <div className="infoCompany">

          <p className="dissapearone">
            DMR o Radio Móvil Digital (Digital Mobile Radio por sus siglas en inglés)
            es un estándar de radio digital abierto. Con reconocimiento mundial,
            es una tecnología que combina voz, datos, características y aplicaciones.
            <br />
            <br />
            Gracias al estándar DMR,
            las radios Hytera DMR funcionan tienen gran compatibilidad con cualquier otro sistema.
            Los radios Hytera DMR se distinguen por su amplitud de rango y sus características
            únicas para comunicaciones de negocio y de misión crítica.
            <br />
            <br />
            Desde la ligera y compacta serie H, diseñada para facilitar el uso en interiores,
            hasta la robusta y segura radio intrínsecamente segura PD796Ex que opera en ambientes
            hostiles donde la seguridad es vital. Hay un radio para todos: radios para seguridad,
            radios para mejorar la productividad, radios para atmósferas explosivas, y más.
            En Hytera, estamos conectando personas en todo el mundo, mejorando la seguridad y
            la productividad de millones de personas.

          </p>

          <p className="dissapeartwo">
            El Nivel III de DMR, según lo define el ETSI, cubre las operaciones de trunking en las
            bandas de frecuencia 66-960 MHz. El estándar especifica dos intervalos de tiempo
            en canales de12,5
            kHz, y es similar a TETRA en que admite funcionalidades de voz y mensajería corta
            en una amplia
            gama de formatos. Sin embargo, en comparación con TETRA, su precio no es tan alto.
            El Tier III al ser un más avanzado que la tecnología análoga y DMR I o II, es
            adecuado para
            algunas de las operaciones más complejas del mundo.
            La solución DMR Tier III de Hytera, el DS-6211, constituye la verdadera ruta
            de actualización para los clientes de MPT1327.

          </p>
          <p className="dissapearthree">
            Tiene como características que su ancho de banda varíaentre
            300 a 3.000 MHz, aunque con algunos canales de banda superior,
            entre 3.5 GHz y 26 GHz. Es usado como enlace entre una empresa y
            un centro que funcione como centro de conmutación del operador,
            o como un enlace entre redes LAN.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Introducción;
