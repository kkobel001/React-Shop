import React from 'react';
import SimpleButton from './SimpleButton';

export default {
  title: 'Atoms/SimpleButton',
  component: SimpleButton,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};
const Template = args => <SimpleButton {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  value: 'Men',
  control: 'text',
};

export const Secondary = Template.bind({});
Secondary.args = {
  value: 'Very long words',
};
