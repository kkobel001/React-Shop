export const validateEmailSyntax = email => /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(email);
export const validatePasswordSyntax = password => /^(?=.{5,})(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[\W])/i.test(password);

const InitialStateMessage = {
  email: 'Email is not correct',
  password: 'Password is not correct',
  surname: 'Surname is required',
  name: 'Name is required',
  message: 'Message is required',
};

export const validateEmail = email => {
  const errors = {};

  if (!validateEmailSyntax(email)) {
    errors.email = InitialStateMessage.email;
  }

  return errors;
};

export const validateLogin = form => {
  const errors = {};

  if (!validateEmailSyntax(form.email)) {
    errors.email = InitialStateMessage.email;
  }
  if (!validatePasswordSyntax(form.password)) {
    errors.password = InitialStateMessage.password;
  }

  return errors;
};

export const validateRegister = form => {
  const errors = {};

  if (!form.name) {
    errors.name = InitialStateMessage.name;
  }

  if (!form.surname) {
    errors.surname = InitialStateMessage.surname;
  }

  if (!validateEmailSyntax(form.email)) {
    errors.email = InitialStateMessage.email;
  }

  if (!validatePasswordSyntax(form.password)) {
    errors.password = InitialStateMessage.password;
  }

  return errors;
};

export const validateContact = form => {
  const errors = {};

  if (!form.name) {
    errors.name = InitialStateMessage.name;
  }

  if (!validateEmailSyntax(form.email)) {
    errors.email = InitialStateMessage.email;
  }
  if (!form.message) {
    errors.message = InitialStateMessage.message;
  }

  return errors;
};
