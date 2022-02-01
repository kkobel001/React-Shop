import React from 'react';
import Searchbar from './Searchbar';

export default {
  title: 'Atoms/Searchbar',
  component: Searchbar,
};
const Template = args => <Searchbar {...args} />;

export const Search = Template.bind({});
Search.args = {};
