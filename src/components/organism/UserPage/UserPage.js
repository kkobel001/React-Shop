import React from 'react';
import { Switch, Route, useRouteMatch, NavLink, useHistory } from 'react-router-dom';
import useAuth from 'hooks/useAuth';
import './UserPage.scss';
import UserOrder from './UserOrder/UserOrder';
import userAddress from './UserAddress/UserAddress';
import userData from './UserDate/UserData';

const UserPage = () => {
  const { path, url } = useRouteMatch();
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
              <NavLink exact to={`${url}/address`} className="nav-link" activeClassName="active">
                My address
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink exact to={`${url}/data`} className="nav-link" activeClassName="active">
                My data
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink exact to="/home" onClick={logout} className="nav-link" activeClassName="active">
                Wyloguj
              </NavLink>
            </li>
          </>
        ) : null}
      </ul>

      <Switch>
        <Route path={`${path}/address`} component={userAddress} />
        <Route path={`${path}/data`} component={userData} />
        <Route path={`${path}`} component={UserOrder} />
      </Switch>
    </div>
  );
};

export default UserPage;
