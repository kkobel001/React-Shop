import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import ContactForm from './ContactForm';

describe('correct render in components', () => {
  it('Render the component', () => {
    render(<ContactForm />);
    fireEvent.change(screen.getByPlaceholderText('Name'), { target: { value: 'Kasia' } });
    fireEvent.change(screen.getByPlaceholderText('Your Email Address'), { target: { value: 'kasia.kobel@interia.pl' } });
    fireEvent.change(screen.getByPlaceholderText('Name'), { target: { value: 'How Can We Help?' } });
    fireEvent.click(screen.getByText('Send'));
  });
});
