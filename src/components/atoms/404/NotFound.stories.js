import React from 'react';
import NotFound from './NotFound';

export default {
  title: 'Atoms/PageNotFound',
  component: NotFound,
};
const Template = args => <NotFound {...args} />;

export const Page = Template.bind({});
Page.args = { Page: true, label: 'NotFound' };
