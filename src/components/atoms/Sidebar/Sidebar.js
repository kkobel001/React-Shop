import React from 'react';
import { Link } from 'react-router-dom';

const userPanel = () => (
  <ul>
    <li>
      <Link to="/">My order</Link>
    </li>
    <li>
      <Link to="/">My address</Link>
    </li>
    <li>
      <Link to="/">My order</Link>
    </li>
  </ul>
);

export default userPanel;
