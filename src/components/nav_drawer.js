import { Icon } from '@iconify/react';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { NavLink, Link } from 'react-router-dom';
import '../styles/navdrawer.css';
import { cleanUser } from '../redux/models/login';

const NavDrawer = () => {
  const [showMenu, setShowMenu] = useState(false);
  const dispatch = useDispatch();

  const createLinks = () => {
    const tags = ['MODELOS', 'AGENDAR', 'MIS RESERVACIONES', 'AGREGAR MODELO', 'REMOVER MODELO'];
    const addresses = ['/home/models', '/home/reserve', '/home/my-reservations', '/home/add-motorcycle', '/home/delete-motorcycle'];
    const links = [];

    for (let i = 0; i < tags.length; i += 1) {
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
    links.push(
      <NavLink
        className="link logout"
        onClick={() => dispatch(cleanUser())}
        to="/"
        key={6}
      >
        LOG OUT
      </NavLink>,
    );
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
          to="/home/models"
        >
          <img alt="tentativo" src="https://www.hytera.la/assets/img/logo.svg" />
          Crelosa
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
          <ul className="footer-menu">
            { socialMedia() }
          </ul>
        </div>
      </div>

      <div className="desktop-menu">
        <Link
          className="brand"
          to="/home/models"
        >
          <img alt="tentativo" src="https://www.hytera.la/assets/img/logo.svg" />
          Crelosa
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
