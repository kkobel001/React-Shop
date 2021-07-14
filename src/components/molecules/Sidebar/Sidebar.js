import React from 'react';
import { Link } from 'react-router-dom';
import './Sidebar.scss';

const Sidebar = () => {
  const titlePanel = [
    {
      id: 1,
      title: 'My order',
      url: '',
      cName: 'panel-item',
    },
    {
      id: 1,
      title: 'My addres',
      url: '',
      cName: 'panel-item',
    },
    {
      id: 1,
      title: 'Log out',
      url: '/sidebar',
      cName: 'panel-item',
    },
  ];
  const click = true;

  return (
    <ul className={click ? 'panel-list active' : 'panel-list'}>
      {titlePanel.map(({ cName, title, url, id }) => (
        <li className={cName} key={id}>
          <Link className="items-link" to={url}>
            {title}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default Sidebar;
