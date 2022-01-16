import React from 'react';
import Error from './Error';

export default {
  title: 'Atoms/Error',
  component: Error,
};
const Template = args => <Error {...args} />;

export const DefaultErr = Template.bind({});
DefaultErr.args = {};
