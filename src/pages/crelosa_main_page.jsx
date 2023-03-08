import NavBarCrelosa from '../components/crelosa_page_components/nav_bar_crelosa';
import Caratula from '../components/crelosa_page_components/caratula';
import InfoProducts from '../components/crelosa_page_components/info_products';
import QuieneSomos from '../components/crelosa_page_components/quienes_somos';
import Asociados from '../components/crelosa_page_components/asociados';
import PieDePagina from '../components/crelosa_page_components/pie_de_pagina';
import Introducción from '../components/crelosa_page_components/introducción';

const CrelosaMainPage = () => (
  <section className="crelosa_main_page_container">
    <NavBarCrelosa />
    <Introducción />
    <Caratula />
    <InfoProducts />
    <QuieneSomos />
    <Asociados />
    <PieDePagina />
  </section>
);

export default CrelosaMainPage;
