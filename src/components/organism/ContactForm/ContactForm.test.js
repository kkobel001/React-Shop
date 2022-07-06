import React from 'react';
import { render } from '@testing-library/react';
import ContactForm from './ContactForm';

describe('correct renter in component', () => {
  it('value in input', () => {
    render(<ContactForm />);
  });
});
