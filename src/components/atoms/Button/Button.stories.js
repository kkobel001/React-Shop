import React from 'react';
// eslint-disable-next-line import/no-unresolved
import { Button } from './Button';

export default {
  title: 'Example/Button',
  component: Button,
  argTypes: {
    backgroundColor: { control: 'color' },
    title: 'My Card',
  },
};

const Template = args => <Button {...args} />;

export const Simple = Template.bind({});
Simple.args = {
  primary: true,
  label: 'Button',
};
