import React from 'react';
import { NavLink, useHistory } from 'react-router-dom';
import useAuth from 'hooks/useAuth';
import { PropTypes } from 'prop-types';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import PersonIcon from '@mui/icons-material/Person';
import LogoutIcon from '@mui/icons-material/Logout';
import LoginIcon from '@mui/icons-material/Login';
import './NavIconMenu.scss';
import { connect } from 'react-redux';

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

  if (auth) {
    history.push('/UserPage');
  }

  return (
    <div className="icon-wrapper">
      <ul className="icon-row">
        <li className="icon-item">
          <NavLink exact to="/OrderPage" className="item-link" activeClassName="active">
            <ShoppingCartIcon />
            <span className="minicart-count">{cartQuantity}</span>
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

NavIconMenu.propTypes = {
  cartQuantity: PropTypes.number.isRequired,
};

const mapStateToProps = state => ({
  count: state.count,
});

export default connect(mapStateToProps)(NavIconMenu);
