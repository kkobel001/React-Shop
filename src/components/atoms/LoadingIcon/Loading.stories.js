import React from 'react';
import Loading from './LoadingIcon';

export default {
  title: 'Atoms/Loading',
  component: Loading,
};
const Template = args => <Loading {...args} />;

export const LoadingIcon = Template.bind({});
LoadingIcon.args = {};
