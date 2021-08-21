import React from 'react';
import logo from '../img/Logo.svg';
import './Nav.css';

function Nav() {
  return (
    <nav className="nav">
      <img className="nav__img" src={logo} alt="SPACEX" />
      <ul className="nav__menu">
        <li className="nav__item">Ultimo lanzamiento</li>
        <li className="nav__item">Todos los lanzamientos</li>
      </ul>
    </nav>
  )
}

export default Nav;