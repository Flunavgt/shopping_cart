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
        <video className="videoTag" autoPlay loop muted>
          <source src="/video/test1.mp4" type="video/mp4" />
        </video>
        <img src={logo} alt="Crelosa logo" className="logo_main_img" />
        <h1 className="titleCompanyintro">
          Líder en comunicaciones
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
            DMR de nivel I tienen una potencia de transmisión más baja y son más
            utilizadas por personas en actividades recreativas al aire libre,
            pequeñas empresas u otras aplicaciones que no requieren una
            cobertura de área amplia.
          </p>

          <p className="dissapeartwo">
            DMR Tier III también utiliza la banda de frecuencia de 66 a 960 MHz,
            específicamente 66-88 MHz, 136-174 MHz, 400-527 MHz y 806-941 MHz.
            DMR Tier III admite enlaces de radio que operan bajo licencias
            individuales.
            El nivel III permite servicios de voz, mensajes de texto y paquetes de
            datos en una variedad de formatos. El estándar DMR también especifica el uso
            de la tecnología TDMA. TDMA significa Acceso Múltiple por División
            de Tiempo. TDMA proporciona dos canales lógicos y cada espacio de
            canal de 12,5 kilohercios.
            Esto proporciona una duplicación útil de la capacidad dentro del
            mismo espacio de canales analógicos.
          </p>
          <p className="dissapearthree">
            DMR de nivel I tienen una potencia de transmisión más baja y son más
            utilizadas por personas en actividades recreativas al aire libre,
            pequeñas empresas u otras aplicaciones que no requieren una
            cobertura de área amplia.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Introducción;
