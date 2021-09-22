import React from 'react';
import { Switch, Route, useRouteMatch, NavLink } from 'react-router-dom';
import useAuth from 'hooks/useAuth';

// import PropTypes from 'prop-types';
// import Sidefake from 'components/organism/Sidebar/Sidefake';
import './UserPage.scss';
// import UserOrder from './UserOrder/UserOrder';
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
              <NavLink exact to={`${url}`} className="nav-link active">
                My orders
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to={`${url}/adress`} className="nav-link active">
                My addres
              </NavLink>
            </li>
            <NavLink to="/" onClick={logout}>
              Wyloguj
            </NavLink>
          </>
        ) : null}
      </ul>

      <Switch>
        <Route path={`${path}/adress`} component={userAddress} />
        {/* <Route path={`${path}`} component={UserOrder} /> */}
      </Switch>
    </div>
  );
};

// UserPage.propTypes = {
//   children: PropTypes.element.isRequired,
// };

export default UserPage;

// <div className="wrapper-user">
// <ul className="nav nav-tabs">
//   <li className="nav-item">
//     <NavLink exact to={`${url}`} className="nav-link active">
//       My orders
//     </NavLink>
//   </li>
//   <li className="nav-item">
//     <NavLink to={`${url}/adress`} className="nav-link active">
//       My addres
//     </NavLink>
//   </li>
//   <NavLink to="/" onClick={logout}>
//     Wyloguj
//   </NavLink>
// </ul>r
// </div>
