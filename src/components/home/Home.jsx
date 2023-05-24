import React from 'react';
import './home.scss';
import Navbar from './navbar/Navbar';
import PieDePagina from '../crelosa_page_components/pie_de_pagina';
import Introduction from '../crelosa_page_components/introducción';
import AboutUs from './about/AboutUs';
import Products from './products/Products';
import Asociados from '../crelosa_page_components/asociados';
import Caratula from '../crelosa_page_components/caratula';

const Home = () => (
  <>
    <Navbar />
    <Introduction />
    <AboutUs />
    <Products />
    <Caratula />
    <Asociados />
    <PieDePagina />
  </>
);

export default Home;
