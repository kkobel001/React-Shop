import React from 'react';
import Input from './Input';

export default {
  title: 'Atoms/Input',
  component: Input,
};
const Template = args => <Input name="Men" {...args} />;

export const TextInput = Template.bind({});
TextInput.args = {
  value: 'Katarzyna',
  label: 'email',
  type: 'text',
};

export const NumberInput = Template.bind({});
NumberInput.args = {
  value: '15',
  label: 'flat number',
  type: 'text',
};
