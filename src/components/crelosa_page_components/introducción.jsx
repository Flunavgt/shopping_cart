import React, { useState } from 'react';
import '../../styles/CrelosaPage-styles/introduccion.css';
import logo from './images/Introduccion/CRELOSA-01.png';

const Introducción = () => {
  const [lastclicked, setLastiClicked] = useState('');

  const handleVideo = (input) => {
    document.querySelector('#videoTest1').style.display = 'none';
    document.querySelector('#videoTest2').style.display = 'none';
    document.querySelector('#videoTest3').style.display = 'none';
    document.querySelector('#videoTest4').style.display = 'none';
    document.querySelector('#videoTest5').style.display = 'none';
    document.querySelector('#videoTest6').style.display = 'none';
    document.querySelector('#videoTest7').style.display = 'none';
    document.querySelector('#videoTest8').style.display = 'none';

    switch (input) {
      case 1: {
        const element = document.querySelector('#videoTest1');
        element.style.display = 'block';
        break;
      }
      case 2: {
        const element = document.querySelector('#videoTest2');
        element.style.display = 'block';
        break;
      }
      case 3: {
        const element = document.querySelector('#videoTest3');
        element.style.display = 'block';
        break;
      }
      case 4: {
        const element = document.querySelector('#videoTest4');
        element.style.display = 'block';
        break;
      }
      case 5: {
        const element = document.querySelector('#videoTest5');
        element.style.display = 'block';
        break;
      }
      case 6: {
        const element = document.querySelector('#videoTest6');
        element.style.display = 'block';
        break;
      }
      case 7: {
        const element = document.querySelector('#videoTest7');
        element.style.display = 'block';
        break;
      }
      case 8: {
        const element = document.querySelector('#videoTest8');
        element.style.display = 'block';
        break;
      }

      default: {
        break;
      }
    }
  };

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
      <div className="btn-group handlevideo_container">
        <button type="button" className="btn btn-secondary dropdown-toggle" data-bs-toggle="dropdown" data-bs-display="static" aria-expanded="false">
          Fondos de Ejemplo
        </button>
        <ul className="dropdown-menu dropdown-menu-lg-end">
          <li><button onClick={() => handleVideo(1)} className="dropdown-item" type="button">Video 1</button></li>
          <li><button onClick={() => handleVideo(2)} className="dropdown-item" type="button">Video 2</button></li>
          <li><button onClick={() => handleVideo(3)} className="dropdown-item" type="button">Video 3</button></li>
          <li><button onClick={() => handleVideo(4)} className="dropdown-item" type="button">Video 4</button></li>
          <li><button onClick={() => handleVideo(5)} className="dropdown-item" type="button">Video 5</button></li>
          <li><button onClick={() => handleVideo(6)} className="dropdown-item" type="button">Video 6</button></li>
          <li><button onClick={() => handleVideo(7)} className="dropdown-item" type="button">Video 7</button></li>
          <li><button onClick={() => handleVideo(8)} className="dropdown-item" type="button">Video 8</button></li>
        </ul>
      </div>
      <div className="videoIntro">

        <video id="videoTest1" className="videoTag" autoPlay loop muted>
          <source src="/video/test1.mp4" type="video/mp4" />
        </video>
        <video id="videoTest2" className="videoTag" autoPlay loop muted>
          <source src="/video/test2.mp4" type="video/mp4" />
        </video>
        <video id="videoTest3" className="videoTag" autoPlay loop muted>
          <source src="/video/test3.mp4" type="video/mp4" />
        </video>
        <video id="videoTest4" className="videoTag" autoPlay loop muted>
          <source src="/video/test4.mp4" type="video/mp4" />
        </video>
        <video id="videoTest5" className="videoTag" autoPlay loop muted>
          <source src="/video/test5.mp4" type="video/mp4" />
        </video>
        <video id="videoTest6" className="videoTag" autoPlay loop muted>
          <source src="/video/test6.mp4" type="video/mp4" />
        </video>
        <video id="videoTest7" className="videoTag" autoPlay loop muted>
          <source src="/video/test7.mp4" type="video/mp4" />
        </video>
        <video id="videoTest8" className="videoTag" autoPlay loop muted>
          <source src="/video/test8.mp4" type="video/mp4" />
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
