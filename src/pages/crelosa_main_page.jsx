import { useEffect, useState } from 'react';
import NavBarCrelosa from '../components/crelosa_page_components/nav_bar_crelosa';
import Caratula from '../components/crelosa_page_components/caratula';
import Asociados from '../components/crelosa_page_components/asociados';
import PieDePagina from '../components/crelosa_page_components/pie_de_pagina';
import Introducción from '../components/crelosa_page_components/introducción';
import '../App.css';
import '../styles/CrelosaPage-styles/CrelosaMainPage.css';
import logo from '../components/crelosa_page_components/images/Introduccion/CRELOSA-01.png';
import YoutubeVideo from '../components/crelosa_page_components/youtube_video';

const CrelosaMainPage = () => {
  const useScreenSize = () => {
    const [width, setWidth] = useState(window.innerWidth);
    const [height, setHeight] = useState(window.innerHeight);

    const handleResize = () => {
      setWidth(window.innerWidth);
      setHeight(window.innerHeight);
    };

    useEffect(() => {
      window.addEventListener('resize', handleResize);

      return () => {
        window.removeEventListener('resize', handleResize);
      };
    }, []);
    return { width, height };
  };

  if (useScreenSize().width < 800) {
    return (
      <div className="Mens_Working_here">
        <h1>Version   Mobil   no   disponible</h1>
        <img src={logo} alt="Logo_Crelosa" />
      </div>
    );
  }

  return (
    <section className="crelosa_main_page_container">
      <NavBarCrelosa />
      <Introducción />
      <YoutubeVideo />
      <Caratula />
      <Asociados />
      <PieDePagina />
    </section>
  );
};

export default CrelosaMainPage;
