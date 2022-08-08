import React from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import './IconLink.scss';

export default function IconLink({ children, switchpath }) {
  return (
    <li className="icon-item">
      <NavLink exact to={`/${switchpath}`} className="item-link" activeClassName="active">
        {children}
      </NavLink>
    </li>
  );
}

IconLink.propTypes = {
  children: PropTypes.arrayOf(PropTypes.object).isRequired,
  switchpath: PropTypes.string.isRequired,
};
