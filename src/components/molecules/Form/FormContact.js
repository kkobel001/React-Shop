import React, { useState } from 'react';
// import firebase from 'firebase/app';
// import 'firebase/database';
// import uuidv4 from 'helpers/Helpers';
import './FormContact.scss';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import PhoneIcon from '@material-ui/icons/Phone';
import PlaceIcon from '@material-ui/icons/Place';

// function sendFormData(name, email, message) {
//   const database = firebase.database();
//   const path = `contact/${uuidv4()}`;

//   database.ref(path).set({
//     name,
//     email,
//     message,
//     timestamp: new Date().toISOString(),
//   });
// }
const validate = form => {
  const errors = {};

  if (!form.name) {
    errors.name = 'Name is required';
  }

  if (!form.email) {
    errors.email = 'Email is required';
  }
  if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(form.email)) {
    errors.email = 'Zły email';
  }
  if (!form.message) {
    errors.message = 'Email is required';
  }
  // if (form.message.length > 79) {
  //   errors.message = 'Text is to short';
  // }

  return errors;
};

const FormContact = () => {
  const [error, setError] = useState(null);
  const [form, setForm] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleSubmit = e => {
    e.preventDefault();
    const errorText = validate(form);
    if (errorText) {
      setError(errorText);
      // console.log('blad');
    }
    // console.log('form sumbitted', form);
    // sendFormData(name, email, message);
  };

  const updateField = e => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="container">
      <div className="wrapper">
        <form onSubmit={handleSubmit} className="form-wrapper">
          <div className="form-field">
            <h2>Send us a message</h2>

            <input className="in-contact" placeholder="Name" type="name" id="name" name="name" onChange={updateField} />
            {error && <p>{error.name}</p>}

            <input className="in-contact" placeholder="Your Email Adress" type="email" id="email" name="email" onChange={updateField} />
            {error && <p>{error.email}</p>}

            <textarea className="in-text" placeholder="How Can We Help?" type="message" id="message" name="message" maxLength="20" minLength="5" onChange={updateField} />
            {error && <p>{error.message}</p>}

            <button className="btn-form" type="submit" onClick={() => setForm('')}>
              Submit
            </button>
          </div>
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
