import React from 'react';
import { NavLink } from 'react-router-dom';
import './Sidebar.scss';
import UserPanel from 'components/molecules/UserPanel/UserPanel';

const Sidebar = () => {
  const titlePanel = [
    {
      id: 1,
      title: 'My order',
      url: { UserPanel },
      cName: 'panel-link',
      activeClassName: 'active-link',
    },
    {
      id: 2,
      title: 'My address',
      url: '',
      cName: 'panel-link',
      activeClassName: 'active-link',
    },
    {
      id: 3,
      title: 'Log out',
      url: '/userPanel',
      cName: 'panel-link',
      activeClassName: 'active-link',
    },
  ];

  return (
    <ul className="panel-list">
      {titlePanel.map(({ cName, title, url, id }) => (
        <li className="nav-items" key={id}>
          <NavLink className={cName} exact to={url}>
            {title}
          </NavLink>
        </li>
      ))}
    </ul>
  );
};

export default Sidebar;
