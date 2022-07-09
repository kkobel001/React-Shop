import React from 'react';
import { render } from '@testing-library/react';
import Input from './Input';

describe('User Field', () => {
  it('Renders the component', () => {
    render(<Input label="name" name="name" id="name" type="text" />);
  });
});
