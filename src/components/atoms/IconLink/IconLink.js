import React from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import './IconLink.scss';

export default function IconLink({ children }) {
  return (
    <li className="icon-item">
      <NavLink exact to="/OrderPage" className="item-link" activeClassName="active">
        {children}
      </NavLink>
    </li>
  );
}

IconLink.propTypes = {
  children: PropTypes.arrayOf(PropTypes.object).isRequired,
};
