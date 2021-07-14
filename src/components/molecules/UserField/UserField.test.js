import React from 'react';
import { render } from '@testing-library/react';
import UserField from './UserField';

describe('User Field', () => {
  it('Renders the component', () => {
    render(<UserField label="name" name="name" id="name" type="text" />);
  });
});
