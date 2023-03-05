// import { Route, Routes } from 'react-router-dom';
import NavBarCrelosa from '../components/crelosa_page_components/nav_bar_crelosa';
import Caratula from '../components/crelosa_page_components/caratula';
import InfoProducts from '../components/crelosa_page_components/info_products';
// import QuieneSomos from '../components/crelosa_page_components/quienes_somos';
// import Asociados from '../components/crelosa_page_components/asociados';
// import PieDePagina from '../components/crelosa_page_components/pie_de_pagina';

const CrelosaMainPage = () => (
  <>
    <NavBarCrelosa />

    {/* <Routes> */}
    {/* <Route path="/*" element={<Caratula />} /> */}
    <InfoProducts />
    <Caratula />
    {/* <Route path="/models/:id" element={<QuieneSomos />} />
        <Route path="/reserve" element={<Asociados />} />
        <Route path="/my-operations" element={<PieDePagina />} /> */}
    {/* </Routes> */}
  </>
);

export default CrelosaMainPage;
