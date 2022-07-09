import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import ContactForm from './ContactForm';

describe('correct renter in component', () => {
  it('Render the component', () => {
    render(<ContactForm />);
    //    screen.getByTekst('name');
    //     fireEvent.change(screen.getByText('email'),{target:{value : 'kasia.kobel@interia.pl'}});
    //     fireEvent.change(screen.getByText('message'),{target:{value : 'Jak wylgląda polityka zwrotów?'}});
    fireEvent.click(screen.getByText('Send'));
  });
});
