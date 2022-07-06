import React from 'react';
import SimpleInput from './Input';

export default {
  title: 'Atoms/Input',
  component: SimpleInput,
};
const Template = args => <SimpleInput name="Men" {...args} />;

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
