import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import MenuIcon from '@material-ui/icons/Menu';
import CloseIcon from '@material-ui/icons/Close';
import LogoIcon from '../../../assets/images/logo-01.png';
import './Navbar.scss';
import NavIconMenu from '../../atoms/NavIconMenu/NavIconMenu';
// import { MenuItems} from './MenuItems'

const Navbar = () => {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);

  // const showButton = () => {
  //   if (window.innnerWidth <= 960) {
  //     setButton(false);
  //   } else {
  //     setButton(true);
  //   }
  // };
  // useEffect(() => {
  //   showButton();
  // }, []);

  // window.addEventListener('resize', showButton);
  return (
    <nav className="navbar">
      <div className="logo">
        <img src={LogoIcon} alt="logo" />
      </div>
      <div className="mobile-icon" role="presentation" onClick={handleClick}>
        <div className={click ? <CloseIcon /> : <MenuIcon />} />
      </div>
      <ul className="nav-menu" role="presentation" onClick={handleClick} click={click}>
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
};

export default Navbar;
