import React from 'react';
import StoryRouter from 'storybook-react-router';
import SocialMedia from './SocialMedia';

export default {
  title: 'Atoms/SocialMedia',
  component: SocialMedia,
  decorators: [StoryRouter()],
};
const Template = args => <SocialMedia {...args} />;

export const SocialMediaIcon = Template.bind({});
SocialMediaIcon.args = {};
