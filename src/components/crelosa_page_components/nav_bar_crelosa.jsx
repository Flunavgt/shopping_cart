import React from 'react';
import { useNavigate } from 'react-router-dom';
import * as routes from '../../pages/routes';
import '../../styles/CrelosaPage-styles/NavBarCrelosa.css';

const NavBarCrelosa = () => {
  const navigate = useNavigate();

  const ChangePage = () => {
    navigate(routes.store);
  };

  return (
    <section className="Main_container">
      <header className="top_line" />

      <section className="NavBarCrelosa_MainContainer">
        <div className="caratula_img_container">
          <img src="https://crelosa.com/wp-content/uploads/2019/11/logo.jpg" alt="CRELOSA_LOGO" className="caratula_main_img" />
        </div>

        <div className="buttons_links_container">
          <button type="button" href="">INICIO</button>
          <button type="button" onClick={ChangePage}>CRELOSA STORE</button>
          <button type="button" onClick={' '}>¿QUIENES SOMOS?</button>
          <button type="button" onClick={' '}>¿CONTACTO?</button>
        </div>

      </section>

    </section>
  );
};

export default NavBarCrelosa;
