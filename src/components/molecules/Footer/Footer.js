import React from 'react';
import { Link } from 'react-router-dom';
import './Footes.scss';
import { CardOne, CardTwo } from './FooterItems';
import SocialMedia from '../../atoms/SocialMedia/SocialMedia';
import '../../atoms/Button/Button.scss';

const Footer = () => (
  <div className="container">
    <div className="wrapper">
      <div className="column">
        <h4>Categories</h4>
        <ul className="footer-list">
          {CardOne.map(item => (
            <li item={item} key={item.id}>
              <Link className={item.cName} exact to={item.url}>
                {item.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <div className="column">
        <h4>Help</h4>
        <ul className="footer-list">
          {CardTwo.map(item => (
            <li item={item} key={item.id}>
              <Link className={item.cName} exact to={item.url}>
                {item.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <div className="column">
        <h4>Get in touch</h4>
        <p>Any questions? Let us know in store at 8th floor, 379 Hudson St, New York, NY 10018 or call us on (+1) 96 716 6879</p>
        <SocialMedia />
      </div>
      <div className="column">
        <h4>Newsletter</h4>
        <div className="newsletter">
          <input type="text" className="input" placeholder="Enter your email" />
        </div>
        <button className="btn-main" type="button">
          Subscribe
        </button>
      </div>
    </div>
  </div>
);

export default Footer;
