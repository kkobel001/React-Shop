import React, { useState } from 'react';
import firebase from 'firebase/app';
import 'firebase/database';
import uuidv4 from 'helpers/Helpers';
import './FormContact.scss';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import PhoneIcon from '@material-ui/icons/Phone';
import PlaceIcon from '@material-ui/icons/Place';

function sendFormData(name, email, message) {
  const database = firebase.database();
  const path = `contact/${uuidv4()}`;

  database.ref(path).set({
    name,
    email,
    message,
    timestamp: new Date().toISOString(),
  });
}

const FormContact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    sendFormData(name, email, message);
  };
  return (
    <div className="container">
      <div className="wrapper">
        <form onSubmit={handleSubmit} className="form-wrapper">
          <h2>Send us a message</h2>
          <input className="in-name" placeholder="Name" value={name} onChange={e => setName(e.target.value)} />
          <input className="in-email" placeholder="Your Email Adress" value={email} onChange={e => setEmail(e.target.value)} />
          <textarea className="in-text" placeholder="How Can We Help?" value={message} onChange={e => setMessage(e.target.value)} />
          <button className="btn-form" type="submit">
            Submit
          </button>
        </form>
        <div className="form-context">
          <ul>
            <li>
              <div className="text-section">
                <PlaceIcon className="icon-contact" />
                <h2>Adress</h2>
              </div>
              <p>
                Coza Store Center 8th floor, <br />
                379 Hudson St, New York, NY 10018 US
              </p>
            </li>
            <li>
              <div className="text-section">
                <PhoneIcon className="icon-contact" />
                <h2>Lets Talk</h2>
              </div>
              <p>+1 800 1236879</p>
            </li>
            <li>
              <div className="text-section">
                <MailOutlineIcon className="icon-contact" />
                <h2>Sale Support</h2>
              </div>
              <p>contact@example.com</p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default FormContact;
