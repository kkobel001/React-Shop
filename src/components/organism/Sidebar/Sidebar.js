import React from 'react';
import { NavLink } from 'react-router-dom';
import './Sidebar.scss';

const Sidebar = () => {
  const titlePanel = [
    {
      id: 1,
      title: 'My order',
      url: '/orders',
      cName: 'panel-link',
      activeClassName: 'active-link',
    },
    {
      id: 2,
      title: 'My address',
      url: '/userAddress',
      cName: 'panel-link',
      activeClassName: 'active-link',
    },
    {
      id: 3,
      title: 'Log out',
      url: '/home',
      cName: 'panel-link',
      activeClassName: 'active-link',
    },
  ];

  return (
    <ul className="panel-list">
      {titlePanel.map(({ cName, title, url, id }) => (
        <li className="nav-items" key={id}>
          <NavLink to={url} className={cName}>
            {title}
          </NavLink>
        </li>
      ))}
    </ul>
  );
};

export default Sidebar;
