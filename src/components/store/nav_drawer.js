import { Icon } from '@iconify/react';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink, Link } from 'react-router-dom';
import '../../styles/navdrawer.css';
import { cleanUser } from '../../redux/models/login';
import * as routes from '../../pages/routes';

const NavDrawer = () => {
  const [showMenu, setShowMenu] = useState(false);

  // Verificar si hay un usuario conectado o es libre.
  const currentUser = useSelector((state) => state.current_user);

  const dispatch = useDispatch();

  const createLinks = () => {
    const tags = ['CRELOSA OFICIAL', 'MODELOS', 'AGENDAR', 'MIS RESERVACIONES', 'AGREGAR MODELO', 'REMOVER MODELO'];
    const addresses = [`${routes.crelosaPage}`, `${routes.store}/models`, `${routes.store}/reserve`, `${routes.store}/my-operations`, `${routes.store}/add-motorcycle`, `${routes.store}/delete-motorcycle`];
    const links = [];

    for (let i = 0; i < tags.length; i += 1) {
      // Desabilitar botón de "mis reservaciones" si no está conectado el usuario
      if (i === 3 && currentUser.login === false) {
        links.push(
          <NavLink
            className="link logout"
            onClick={() => setShowMenu(false)}
            to="/login"
            key={tags[i]}
          >
            {tags[i]}
          </NavLink>,
        );
      } else {
        links.push(
          <NavLink
            className="link"
            onClick={() => setShowMenu(false)}
            to={addresses[i]}
            key={tags[i]}
          >
            {tags[i]}
          </NavLink>,
        );
      }
    }

    // Se agrego condición para confirmar el acceso de un usuario
    if (currentUser.login) {
      // Mostrar LogOut si existe un usuario conectado
      links.push(
        <NavLink
          className="link logout"
          onClick={() => dispatch(cleanUser())}
          to={routes.store}
          key={tags.length}
        >
          LOG OUT
        </NavLink>,
      );
    } else {
      // Mostrar Login si no hay usuario
      links.push(
        <NavLink
          className="link logout"
          onClick={() => dispatch(cleanUser())}
          to={routes.loginPage}
          key={tags.length}
        >
          LOG IN
        </NavLink>,
      );
    }

    return links;
  };

  const socialMedia = () => {
    const logos = ['mdi:twitter', 'ri:facebook-fill', 'vaadin:google-plus', 'mdi:vimeo', 'cib:pinterest-p'];
    const social = [];

    for (let i = 0; i < logos.length; i += 1) {
      social.push(
        <li className="social-item" key={logos[i]}>
          <Icon
            className="social-icon"
            color="#333333"
            icon={logos[i]}
          />
        </li>,
      );
    }
    return social;
  };

  return (
    <>
      <div className="mobile-menu">
        <Link
          className="brand"
          onClick={() => setShowMenu(false)}
          to="/models"
        >
          <img alt="tentativo" src="https://www.hytera.la/assets/img/logo.svg" />
          <span>Crelosa</span>
        </Link>
        <Icon
          className="size-menu-btn"
          icon={showMenu ? 'humbleicons:times' : 'material-symbols:menu-rounded'}
          onClick={() => setShowMenu(!showMenu)}
        />
        <div className={`mobile-cont ${showMenu ? 'show-nav' : 'hide-nav'}`}>

          <nav
            className="mobile-nav"
          >
            { createLinks() }
          </nav>
          {
            currentUser.login ? <h1>{currentUser.user.name}</h1> : null
          }
          <ul className="footer-menu">
            { socialMedia() }
          </ul>
        </div>
      </div>

      <div className="desktop-menu">

        <Link
          className="brand"
          to="/models"
        >
          <img alt="tentativo" src="https://www.hytera.la/assets/img/logo.svg" />
          <span>Crelosa</span>
          {
            // Se agrego el nombre en el navbar para identificar usuario
            currentUser.login ? <h1>{currentUser.user.name}</h1> : null
          }
        </Link>

        <nav
          className="mobile-nav"
        >
          { createLinks() }
        </nav>
        <ul className="footer-menu">
          { socialMedia() }
        </ul>
      </div>
    </>
  );
};

export default NavDrawer;
