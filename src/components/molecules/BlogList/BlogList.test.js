import React from 'react';
import { screen, render } from '@testing-library/react';
import MockAdapter from 'axios-mock-adapter';
import axios from 'axios';
import BlogList from './BlogList';

const mock = new MockAdapter(axios);
const query = `
{
    allArticles {
        id
        title
        context
        image
            {
            url
            }
        }
    }
    `;

describe('Blog Fields', () => {
  afterEach(() => {
    mock.reset();
  });

  it('Error then article are not loaded', async () => {
    mock.onPost(' https://graphql.datocms.com/', { query }).reply(500);
    render(<BlogList />);
    await screen.findByText(/Sorry/);
  });

  it('Displays the articles', async () => {
    mock.onPost(' https://graphql.datocms.com/', { query }).reply(200, {
      data: {
        allArticles: [{ id: 1, title: 'Test', category: 'Test', content: 'Test' }],
      },
    });
    render(<BlogList />);
    await screen.getByDisplayValue(/Test/);
  });
});
