import React from 'react';
import { Link, useHistory } from 'react-router-dom';
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
      history.push('/Shop');
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
          <Link to="./" className="item-link">
            <ShoppingCartIcon />
          </Link>
        </li>

        {auth ? (
          <>
            <li className="icon-item">
              <Link to="/UserPage" className="item-link">
                <PersonIcon />
              </Link>
            </li>
            <li>
              <Link to="/" onClick={logout}>
                <LogoutIcon />
              </Link>
            </li>
          </>
        ) : (
          <>
            <li className="icon-item">
              <Link to="/login" className="item-link">
                <LoginIcon />
              </Link>
            </li>
          </>
        )}
      </ul>
    </div>
  );
};

export default NavIconMenu;
