import React from 'react';
import { NavLink, useHistory } from 'react-router-dom';
import useAuth from 'hooks/useAuth';
import { PropTypes } from 'prop-types';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import PersonIcon from '@mui/icons-material/Person';
import LogoutIcon from '@mui/icons-material/Logout';
import LoginIcon from '@mui/icons-material/Login';
import IconLink from '../../atoms/IconLink/IconLink';
import './NavIconMenu.scss';

const NavIconMenu = ({ cartQuantity }) => {
  const [auth, setAuth] = useAuth();
  const history = useHistory();

  const logout = e => {
    e.preventDefault();

    if (setAuth) {
      history.push('/Home');
    }
    setAuth(false);
  };

  return (
    <div className="icon-wrapper">
      <ul className="icon-row">
        <IconLink>
          <ShoppingCartIcon />
          <span className="minicart-count">{cartQuantity}</span>
        </IconLink>

        {auth ? (
          <>
            <IconLink>
              <PersonIcon />
            </IconLink>
            <li>
              <NavLink exact to="/Home" onClick={logout} data-testid="logout-element">
                <LogoutIcon />
              </NavLink>
            </li>
          </>
        ) : (
          <>
            <li className="icon-item">
              <NavLink to="/login" className="item-link" activeClassName="active-link" data-testid="login-element">
                <LoginIcon />
              </NavLink>
            </li>
          </>
        )}
      </ul>
    </div>
  );
};

NavIconMenu.propTypes = {
  cartQuantity: PropTypes.number.isRequired,
};

export default NavIconMenu;
