import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import MenuIcon from '@material-ui/icons/Menu';
import CloseIcon from '@material-ui/icons/Close';
import { useSelector } from 'react-redux';
import NavIconMenu from 'components/molecules/NavIconMenu/NavIconMenu';
import LogoIcon from 'assets/images/logo-01.png';
import './Navbar.scss';
import { MenuItems } from './MenuItems';

const Navbar = () => {
  const [click, setClick] = useState(false);
  const cartQuantity = useSelector(state => state.cart.cartTotalQuantity);
  const handleClick = () => setClick(!click);

  return (
    <nav className="navbar">
      <div className="logo">
        <NavLink to="/">
          <img src={LogoIcon} alt="logo" />
        </NavLink>
      </div>
      <div className="menu-icon" role="presentation" onClick={handleClick}>
        {click ? <CloseIcon /> : <MenuIcon />}
      </div>
      <ul className={click ? 'nav-menu active' : 'nav-menu'}>
        {MenuItems.map(item => (
          <li className="nav-items" item={item} key={item.id}>
            <NavLink className={item.cName} exact to={item.url} onClick={handleClick}>
              {item.title}
            </NavLink>
          </li>
        ))}
      </ul>
      <NavIconMenu cartQuantity={cartQuantity} />
    </nav>
  );
};

export default Navbar;
