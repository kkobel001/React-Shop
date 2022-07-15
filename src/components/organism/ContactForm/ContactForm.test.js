import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import ContactForm from './ContactForm';

describe('correct render in components', () => {
  // const onSubmit = jest.fn();

  it('Render the component', () => {
    render(<ContactForm />);
    fireEvent.change(screen.getByPlaceholderText('Name'), { target: { value: 'Kasia' } });
    fireEvent.change(screen.getByPlaceholderText('Your Email Address'), { target: { value: 'kasia.kobel@interia.pl' } });
    fireEvent.change(screen.getByPlaceholderText('Name'), { target: { value: 'How Can We Help?' } });
    fireEvent.click(screen.getByText('Send'));
  });

  it('has 3 required fields on first step', async () => {
    await waitFor(() => {
      expect(screen.getByPlaceholderText('Name'), { target: { value: 'Kasia' } }).toHaveErrorMessage('Name is required');
    });

    // expect(getCity()).toHaveErrorMessage('city is a required field');
    // expect(getSelectJobSituation()).toHaveErrorMessage(
    //   'You need to select your job situation'
    // );
  });
});
