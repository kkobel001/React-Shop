import React from 'react';
import StoryRouter from 'storybook-react-router';
import IconLink from './IconLink';

export default {
  title: 'Atoms/IconLink',
  decorators: [StoryRouter()],
  component: IconLink,
};
const Template = args => <IconLink {...args} />;

export const AllIconLinks = Template.bind({});
AllIconLinks.args = {};
