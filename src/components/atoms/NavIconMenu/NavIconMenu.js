import React from 'react';
import { Link } from 'react-router-dom';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import FavoriteBorderOutlinedIcon from '@material-ui/icons/FavoriteBorderOutlined';
import SearchTwoToneIcon from '@material-ui/icons/SearchTwoTone';
import './NavIconMenu.scss';

const NavIconMenu = () => (
  <div className="IconWrapper">
    <ul className="IconRow">
      <li className="IconItem">
        <Link to="./" className="ItemLink">
          <ShoppingCartIcon />
        </Link>
      </li>
      <li className="IconItem">
        <Link to="./" className="ItemLink">
          <FavoriteBorderOutlinedIcon />
        </Link>
      </li>
      <li className="IconItem">
        <Link to="./" className="ItemLink">
          <SearchTwoToneIcon />
        </Link>
      </li>
    </ul>
  </div>
);

export default NavIconMenu;
