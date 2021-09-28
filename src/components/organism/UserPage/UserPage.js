import React from 'react';
import { Switch, Route, useRouteMatch, NavLink } from 'react-router-dom';
import useAuth from 'hooks/useAuth';
import './UserPage.scss';
import UserOrder from './UserOrder/UserOrder';
import userAddress from './UserAddress/UserAddress';

const UserPage = () => {
  const { path, url } = useRouteMatch();
  const [auth, setAuth] = useAuth();

  const logout = e => {
    e.preventDefault();
    setAuth(false);
  };

  return (
    <div className="wrapper-user">
      <ul className="icon-row">
        {auth ? (
          <>
            <li className="nav-item">
              <NavLink exact to={`${url}`} className="nav-link" activeClassName="active">
                My orders
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink exact to={`${url}/adress`} className="nav-link" activeClassName="active">
                My addres
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink exact to="/" onClick={logout} className="nav-link" activeClassName="active">
                Wyloguj
              </NavLink>
            </li>
          </>
        ) : null}
      </ul>

      <Switch>
        <Route path={`${path}/adress`} component={userAddress} />
        <Route path={`${path}`} component={UserOrder} />
      </Switch>
    </div>
  );
};

export default UserPage;
