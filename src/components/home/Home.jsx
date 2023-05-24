import React from 'react';
import './home.scss';
import Navbar from './navbar/Navbar';
import Introduction from '../crelosa_page_components/introducción';
import AboutUs from './about/AboutUs';
import Products from './products/Products';

const Home = () => (
  <>
    <Navbar />
    <Introduction />
    <AboutUs />
    <Products />
  </>
);

export default Home;
