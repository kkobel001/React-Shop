import React from 'react';
import { Link } from 'react-router-dom';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import FavoriteBorderOutlinedIcon from '@material-ui/icons/FavoriteBorderOutlined';
import PersonIcon from '@material-ui/icons/Person';
import './NavIconMenu.scss';

const NavIconMenu = () => (
  <div className="icon-wrapper">
    <ul className="icon-row">
      <li className="icon-item">
        <Link to="./" className="item-link">
          <ShoppingCartIcon />
        </Link>
      </li>
      <li className="icon-item">
        <Link to="userPage" className="item-link">
          <FavoriteBorderOutlinedIcon />
        </Link>
      </li>
      <li className="icon-item">
        <Link to="/login" className="item-link">
          <PersonIcon />
        </Link>
      </li>
    </ul>
  </div>
);

export default NavIconMenu;
