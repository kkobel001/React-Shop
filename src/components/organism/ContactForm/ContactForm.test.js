import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import ContactForm from './ContactForm';

describe('correct render in components', () => {
  it('Render the component', () => {
    render(<ContactForm />);
    screen.getByRole('textbox', {
      name: /name/i,
    });
    fireEvent.change(screen.getByText('email'), { target: { value: 'kasia.kobel@interia.pl' } });
    fireEvent.change(screen.getByText('message'), { target: { value: 'Jak wylgląda polityka zwrotów?' } });
    fireEvent.click(screen.getByText('Send'));
  });
});
