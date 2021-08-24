import React from "react";
import { Link } from "react-router-dom";
import logo from "../img/Logo.svg";
import menu from '../img/menu.svg';
import "./Nav.css";

function Nav() {
  return (
    <nav className="nav">
      <img loading="lazy" className="nav__logo" src={logo} alt="SPACEX" />
      <label className="nav__label" htmlFor="menu">
        <img src={menu} alt="menu" />
      </label>
      <input type="checkbox" id="menu" className="nav__input" />
      <ul className="nav__menu">
        <li className="nav__item">
          <Link className="nav__link" to={`${process.env.PUBLIC_URL}/`}>Inicio</Link>
        </li>
        <li className="nav__item">
          <Link className="nav__link" to={`${process.env.PUBLIC_URL}/ultimo`}>
            Ultimo lanzamiento
          </Link>
        </li>
        <li className="nav__item">
          <Link className="nav__link" to={`${process.env.PUBLIC_URL}/todos`}>
            Todos los lanzamientos
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
