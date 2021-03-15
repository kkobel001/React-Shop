import React from 'react';
import { Link } from 'react-router-dom';
import './Footes.scss';

const Footer = () => (
  <div className="container">
    <div className="wrapper">
      <div className="column">
        <h4>Categories</h4>
        <ul className="footer-list">
          <li>
            <Link to="./">
              <p> Women</p>
            </Link>
          </li>
          <li>
            <Link to="./">
              <p>Men</p>
            </Link>
          </li>
          <li>
            <Link to="./">
              <p>Shoes</p>
            </Link>
          </li>
          <li>
            <Link to="./">
              <p> Watches</p>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  </div>
);

export default Footer;
