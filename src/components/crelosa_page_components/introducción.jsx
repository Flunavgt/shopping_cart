/* eslint-disable arrow-body-style */
import React from 'react';
import '../../styles/CrelosaPage-styles/introduccion.css';
import logo from './images/Introduccion/crelosa_logo.png';

const Introducción = () => {
  // const disOne = () => {
  //   const dissapearone = document.querySelector('.dissapearone');
  //   if (dissapearone.style.display === 'none') {
  //     dissapearone.style.display = 'block';
  //   } else {
  //     dissapearone.style.display = 'none';
  //   }
  // };
  const distwo = (input) => {
    const dissapeartwo = document.querySelector(input);
    if (dissapeartwo.style.display === 'none' || dissapeartwo.style.display === '') {
      dissapeartwo.style.display = 'block';
    } else {
      dissapeartwo.style.display = 'none';
    }
  };
  return (
    <div className="Main_introduccion_container">
      <div className="videoIntro">
        <video className="videoTag" autoPlay loop muted>
          <source src="/video/hd1000.mp4" type="video/mp4" />
        </video>
        <img src={logo} alt="Crelosa logo" className="logo_main_img" />
        <h1 className="titleCompanyintro">
          Líder en
          <span>Comunicaciones</span>
        </h1>
        <div className="containerBtnDmr">
          <button onClick={() => distwo('.dissapearone')} type="button" className="disOne">
            <h2>DMR</h2>
          </button>

          <button onClick={() => distwo('.dissapeartwo')} type="button" className="disTwo">
            <h2>DMR Tier 3</h2>
          </button>
        </div>
        <div className="infoCompany">
          {/* <button onClick={disOne} type="button" className="disOne">
            <h2>DMR</h2>
          </button> */}
          <p className="dissapearone">
            DMR de nivel I tienen una potencia de transmisión más baja y son más
            utilizadas por personas en actividades recreativas al aire libre,
            pequeñas empresas u otras aplicaciones que no requieren una
            cobertura de área amplia.
          </p>
          {/* <button onClick={distwo} type="button" className="disTwo">
            <h2>DMR Tier 3</h2>
          </button> */}
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
        </div>
      </div>
    </div>
  );
};

export default Introducción;
