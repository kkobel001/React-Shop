export const validateEmailSyntax = email => /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(email);
export const validatePasswordSyntax = password => /^(?=.{5,})(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[\W])/i.test(password);
const validateCityOrPostalCode = postalCode => /^(\d{2}-\d{3})$/.test(postalCode);
const validateCity = city => /^[a-zA-Z',.\s-]{1,25}$/.test(city);
const validateNumberTelephone = telephone => /^(\+{0,})(\d{0,})([(]{1}\d{1,3}[)]{0,}){0,}(\s?\d+|\+\d{2,3}\s{1}\d+|\d+){1}[\s|-]?\d+([\s|-]?\d+){1,2}(\s){0,}/.test(telephone);

const InitialStateMessage = {
  email: 'Email is not correct',
  password: 'Password is not correct',
  telephone: 'Telephone is not correct',
  postalCode: 'Postal Code not correct',
  flatNumber: 'House number is required',
  city: 'City is required',
  surname: 'Surname is required',
  street: 'Street is required',
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

export const validateAddressForm = form => {
  const errors = {};
  console.log(form);
  if (!form.name) {
    errors.name = InitialStateMessage.name;
  }
  if (!form.surname) {
    errors.surname = InitialStateMessage.surname;
  }
  if (!form.street) {
    errors.street = InitialStateMessage.street;
  }
  if (!form.flatNumber) {
    errors.flatNumber = InitialStateMessage.flatNumber;
  }
  if (!validateCityOrPostalCode(form.postalCode)) {
    errors.postalCode = InitialStateMessage.postalCode;
  }
  if (!validateNumberTelephone(form.telephone)) {
    errors.telephone = InitialStateMessage.telephone;
  }
  if (!validateCity(form.city)) {
    errors.city = InitialStateMessage.city;
  }

  return errors;
};
