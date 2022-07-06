import React from 'react';
import { render } from '@testing-library/react';
import SimpleInput from './Input';

describe('User Field', () => {
  it('Renders the component', () => {
    render(<SimpleInput label="name" name="name" id="name" type="text" />);
  });
});
