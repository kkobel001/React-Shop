import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import SocialMedia from 'components/atoms/SocialMedia/SocialMedia';
import './Footes.scss';
import { CardOne, CardTwo } from './FooterItems';
import 'components/atoms/Button/Button.scss';

const Footer = () => {
  const [date, setDate] = useState();

  const getYear = () => setDate(new Date().getFullYear());

  useEffect(() => {
    getYear();
  }, []);
  return (
    <div className="container-footer">
      <div className="wrapper-footer">
        <div className="column">
          <h4>Categories</h4>
          <ul className="footer-list">
            {CardOne.map(item => (
              <li item={item} key={item.id}>
                <Link className={item.cName} exact="true" to={item.url}>
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
                <Link className={item.cName} exact="true" to={item.url}>
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
            <input type="text" className="input-newsletter" placeholder="Enter your email" />
            <MailOutlineIcon />
          </div>
          <button className=" btn-main" type="button">
            Subscribe
          </button>
        </div>
      </div>
      <p>Copyright &copy; Katarzyna Kobel - {date}</p>
    </div>
  );
};

export default Footer;
