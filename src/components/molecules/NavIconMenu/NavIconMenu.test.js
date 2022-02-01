import { render } from '@testing-library/react';
import React from 'react';
import NavIconMenu from './NavIconMenu';

describe('NavMenu', () => {
  it('render component if user is null', () => {
    render(<NavIconMenu />);
  });
});
