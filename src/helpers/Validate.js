import Helpers from 'helpers/Helpers';

export const validateLogin = form => {
  const errors = {};

  if (!form.email) {
    errors.email = 'Email is required';
  }
  if (!Helpers.validateEmail(form.email)) {
    errors.email = 'Email is not correct';
  }
  if (!form.password) {
    errors.password = 'Password is required';
  }

  return errors;
};

export const validateRegister = form => {
  const errors = {};
  if (!form.name) {
    errors.name = 'Name is required';
  }
  if (!form.surname) {
    errors.surname = 'Surname is required';
  }

  if (!form.email) {
    errors.email = 'Email is required';
  }
  if (!Helpers.validateEmail(form.email)) {
    errors.email = 'Email is not correct';
  }
  if (!form.password) {
    errors.password = 'Password is required';
  }

  return errors;
};

export const validateEmail = email => {
  const errors = {};

  if (!email) {
    errors.email = 'Email is required';
  }
  if (!Helpers.validateEmail(email)) {
    errors.email = 'Email is required!';
  }
  return errors;
};
