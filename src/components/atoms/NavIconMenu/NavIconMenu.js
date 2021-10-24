import React from 'react';
import { NavLink, useHistory } from 'react-router-dom';
import useAuth from 'hooks/useAuth';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import PersonIcon from '@mui/icons-material/Person';
import LogoutIcon from '@mui/icons-material/Logout';
import LoginIcon from '@mui/icons-material/Login';
import './NavIconMenu.scss';

const NavIconMenu = () => {
  const [auth, setAuth] = useAuth();
  const history = useHistory();

  const logout = e => {
    e.preventDefault();

    if (setAuth) {
      history.push('/Home');
    }
    setAuth(false);
  };

  if (auth) {
    history.push('/UserPage');
  }

  return (
    <div className="icon-wrapper">
      <ul className="icon-row">
        <li className="icon-item">
          <NavLink exact to="/OrderPage" className="item-link" activeClassName="active">
            <ShoppingCartIcon />
          </NavLink>
        </li>
        {auth ? (
          <>
            <li className="icon-item">
              <NavLink to="/UserPage" className="item-link" activeClassName="active">
                <PersonIcon />
              </NavLink>
            </li>
            <li>
              <NavLink exact to="/Home" onClick={logout}>
                <LogoutIcon />
              </NavLink>
            </li>
          </>
        ) : (
          <>
            <li className="icon-item">
              <NavLink to="/login" className="item-link" activeClassName="active-link">
                <LoginIcon />
              </NavLink>
            </li>
          </>
        )}
      </ul>
    </div>
  );
};

export default NavIconMenu;
