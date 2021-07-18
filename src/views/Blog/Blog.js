import React from 'react';
import Titlebox from 'components/atoms/TitleBox/TitleBox';
import BlogList from 'components/molecules/BlogList/BlogList';
import MainTemplates from 'templates/MainTemplates';

const Blog = () => (
  <MainTemplates>
    <Titlebox names="Blog" />
    <BlogList />
  </MainTemplates>
);
export default Blog;
