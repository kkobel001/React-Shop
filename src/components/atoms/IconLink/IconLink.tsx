import React from 'react';
import { NavLink } from 'react-router-dom';
import './IconLink.scss';

type IconLinkProps = {
  switchpath: string,
  children: React.ReactNode;
}

const IconLink: React.FC<IconLinkProps> = ({ children, switchpath }) => (
  <li className="icon-item">
    <NavLink exact to={`/${switchpath}`} className="item-link" activeClassName="active">
      {children}
    </NavLink>
  </li>
)
export default IconLink; 
