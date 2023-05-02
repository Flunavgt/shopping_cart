import { Icon } from '@iconify/react';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import * as routes from '../../pages/routes';
import '../../styles/CrelosaPage-styles/NavBarCrelosa.css';
import '../../styles/CrelosaPage-styles/VARIABLES.css';

const NavBarCrelosa = () => {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <div className="container_nabbar_mobil">
      <section className="Main_container">
        <header className="top_line" />

        {/* Icono de hamburguesa */}
        <Icon
          className="size_menuCrelosa_btn"
          icon={showMenu ? 'humbleicons:times' : 'material-symbols:menu-rounded'}
          onClick={() => setShowMenu(!showMenu)}
        />

        <section className={`NavBarCrelosa_MainContainer ${showMenu ? 'null' : 'mobil_navbar'}`}>

          <div className="buttons_links_container">
            <a onClick={() => setShowMenu(false)} className="btn" href="#cobertura">COBERTURA</a>
            <a onClick={() => setShowMenu(false)} className="btn" href="#info_products">PRODUCTOS & SEVICIOS</a>
            <a onClick={() => setShowMenu(false)} className="btn" href={routes.store}>TIENDA</a>
            <Link onClick={() => setShowMenu(false)} className="btn" to="/quienes_somos">¿QUIENES SOMOS?</Link>
            <a onClick={() => setShowMenu(false)} className="btn" href="#asociados">SOCIOS</a>
            <a onClick={() => setShowMenu(false)} className="btn" href="#piedepagina">CONTACTO</a>
          </div>

          {/* <div className="flur_background" /> */}

        </section>

      </section>
    </div>
  );
};

export default NavBarCrelosa;
