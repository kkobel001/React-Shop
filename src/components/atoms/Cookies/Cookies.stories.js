import React from 'react';
import StoryRouter from 'storybook-react-router';
import Cookies from './Cookies';

export default {
  title: 'Atoms/Cookies',
  component: Cookies,
  decorators: [StoryRouter()],
  argTypes: {},
};
const Template = args => <Cookies {...args} />;

export const CookiesPage = Template.bind({});
