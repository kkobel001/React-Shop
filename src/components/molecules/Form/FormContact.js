import React, { useState } from 'react';
import './FormContact.scss';
import Helpers from 'helpers/Helpers';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import PhoneIcon from '@material-ui/icons/Phone';
import PlaceIcon from '@material-ui/icons/Place';
import axios from 'axios';

const validate = form => {
  const errors = {};

  if (!form.name) {
    errors.name = 'Name is required';
  }
  if (!form.email) {
    errors.email = 'Email is required';
  }
  if (!Helpers.validateEmail(form.email)) {
    errors.email = 'Email is not correct';
  }
  if (!form.message) {
    errors.message = 'Message is required';
  }

  return errors;
};

const InitialFormState = {
  name: '',
  email: '',
  message: '',
};

const FormContact = () => {
  const [error, setError] = useState({});
  const [form, setForm] = useState(InitialFormState);

  const resetStates = () => {
    setForm(InitialFormState);
    setError({});
  };

  const handleSubmit = e => {
    e.preventDefault();
    const errorText = validate(form);

    if (!(Object.keys(errorText).length === 0 && errorText.constructor === Object)) {
      setError(errorText);
    } else {
      axios
        .post('https://api.emailjs.com/api/v1.0/email/send', {
          service_id: 'service_2osi8ua',
          template_id: 'template_u34u80w',
          user_id: 'user_RT9rlIr0lNMPYN7M8kEmW',
          template_params: {
            name: form.name,
            email: form.email,
            message: form.message,
          },
        })
        .then(
          () => {
            Helpers.showAlert('Message has been sent succesfully!');
            resetStates();
          },
          networkError => {
            Helpers.showAlert(networkError);
          },
        );
    }
  };

  const updateField = e => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
      InitialFormState,
    });
  };

  return (
    <div className="container">
      <div className="wrapper">
        <form onSubmit={handleSubmit} className="form-wrapper">
          <div className="form-field">
            <h2>Send us a message</h2>

            <input className="in-contact" value={form.name} placeholder="Name" type="name" id="name" name="name" onChange={updateField} />
            {error && <p>{error.name}</p>}

            <input className="in-contact" value={form.email} placeholder="Your Email Adress" type="email" id="email" name="email" onChange={updateField} />
            {error && <p>{error.email}</p>}

            <textarea className="in-text" value={form.message} placeholder="How Can We Help?" type="message" id="message" name="message" maxLength="20" minLength="5" onChange={updateField} />
            {error && <p>{error.message}</p>}

            <button className="btn-form" type="submit">
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
