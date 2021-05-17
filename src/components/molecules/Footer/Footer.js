import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import firebase from 'firebase/app';
import 'firebase/database';
import Helpers from 'helpers/Helpers';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import SocialMedia from 'components/atoms/SocialMedia/SocialMedia';
import './Footes.scss';
import { CardOne, CardTwo } from './FooterItems';
import 'components/atoms/Button/Button.scss';

const validateEmail = email => {
  const errors = {};

  if (!email) {
    errors.email = 'Email is required';
  }
  if (!Helpers.validateEmail(email)) {
    errors.email = 'Email is required!';
  }
  return errors;
};

const Footer = () => {
  const [date, setDate] = useState();
  const [sendEmail, setSendEmail] = useState('');
  const [error, setError] = useState(null);

  const getYear = () => setDate(new Date().getFullYear());

  useEffect(() => {
    getYear();
  }, []);

  const sendNewsletterData = (e, email) => {
    e.preventDefault();
    const errorText = validateEmail(email);

    if (!(Object.keys(errorText).length === 0 && errorText.constructor === Object)) {
      setError(errorText);
    } else {
      const database = firebase.database();
      const path = `newsletter/${Helpers.generateUUID()}`;

      database.ref(path).set(
        {
          email,
          timestamp: new Date().toISOString(),
        },
        firebaseError => {
          if (firebaseError) {
            Helpers.showAlert('Something went wrong please try again :(');
          } else {
            Helpers.showAlert('You are successfully added to newsletter list!');
          }
        },
      );
    }
  };

  const updateEmailField = e => {
    setSendEmail(e.target.value);
  };

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
          {error && <p className="error-text">{error.email}</p>}
          <div className="newsletter">
            <input type="text" className="input-newsletter" placeholder="Enter your email" onChange={updateEmailField} />
            <MailOutlineIcon />
          </div>

          <button className="btn-main" type="button" onClick={e => sendNewsletterData(e, sendEmail)}>
            Subscribe
          </button>
        </div>
      </div>
      <p>Copyright &copy; Katarzyna Kobel - {date}</p>
    </div>
  );
};

export default Footer;
