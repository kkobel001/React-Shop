import React from 'react';
import { NavLink } from 'react-router-dom';
import LogoIcon from '../../../assets/images/logo-01.png';
import './Navbar.scss';
import NavIconMenu from '../../atoms/NavIconMenu/NavIconMenu';

const Navbar = () => (
  <nav className="navbar">
    <div className="logo">
      <img src={LogoIcon} alt="logo" />
    </div>
    <ul className="nav-menu">
      <li className="nav-item">
        <NavLink className="nav-link" exact to="/home" activeclass="active">
          Home
        </NavLink>
      </li>
      <li className="nav-item">
        <NavLink className="nav-link" exact to="/shop" activeclass="active">
          Shop
        </NavLink>
      </li>
      <li className="nav-item">
        <NavLink className="nav-link" exact to="/blog" activeclass="active">
          Blog
        </NavLink>
      </li>
      <li className="nav-item">
        <NavLink className="nav-link" exact to="/about" activeclass="active">
          About
        </NavLink>
      </li>
      <li className="nav-item">
        <NavLink className="nav-link" exact to="/contact" activeclass="active">
          Contact
        </NavLink>
      </li>
    </ul>
    <NavIconMenu />
  </nav>
);

export default Navbar;
