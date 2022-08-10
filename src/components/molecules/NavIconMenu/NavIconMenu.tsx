import React from 'react';
import { NavLink, useHistory } from 'react-router-dom';
import useAuth from 'hooks/useAuth';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import PersonIcon from '@mui/icons-material/Person';
import LogoutIcon from '@mui/icons-material/Logout';
import LoginIcon from '@mui/icons-material/Login';
import IconLink from '../../atoms/IconLink/IconLink';
import './NavIconMenu.scss';


type NavIconProps = {

  cartQuantity: number
}

const NavIconMenu: React.FC<NavIconProps> = ({ cartQuantity }: NavIconProps) => {
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
        <IconLink switchpath="OrderPage">
          <ShoppingCartIcon data-testid="nav-element" />
          <span className="minicart-count">{cartQuantity}</span>
        </IconLink>

        {auth ? (
          <>
            <IconLink switchpath="UserPage">
              <PersonIcon />
            </IconLink>
            <li className="icon-item">
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

// NavIconMenu.propTypes = {
//   cartQuantity: PropTypes.number.isRequired,
// };

export default NavIconMenu;
