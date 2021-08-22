import React from "react";
import { Link } from "react-router-dom";
import logo from "../img/Logo.svg";
import "./Nav.css";

function Nav() {
  return (
    <nav className="nav">
      <img loading="lazy" className="nav__img" src={logo} alt="SPACEX" />
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
