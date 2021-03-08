import React from 'react';
import NavIconMenu from './NavIconMenu';

export default {
  title: 'Example/Button',
  component: NavIconMenu,
  argTypes: {
    backgroundColor: { control: 'color' },
    title: 'My Card',
  },
};

const Template = args => <NavIconMenu {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  primary: true,
  label: 'Button',
};
