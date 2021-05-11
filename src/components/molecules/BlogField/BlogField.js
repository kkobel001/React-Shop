import React, { useState, useEffect } from 'react';
import './BlogField.scss';
import { Link } from 'react-router-dom';
import axios from 'axios';

const BlogField = () => {
  const [articles, setArticles] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    // eslint-disable-next-line no-console
    console.log(process.env.REACT_APP_DATOCMS_TOKEN);
    axios
      .post(
        ' https://graphql.datocms.com/',
        {
          query: `
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
                },`,
        },
        {
          headers: {
            authorization: `Bearer ${process.env.REACT_APP_DATOCMS_TOKEN}`,
          },
        },
      )
      .then(({ data: { data } }) => {
        setArticles(data.allArticles);
      })
      .catch(() => setError("Sorry, we couln't load articles for you"));
  }, []);

  return (
    <div className="wrapper-blog">
      {articles.length > 0 ? (
        articles.map(({ id, title, context, image }) => (
          <div className="blog-items" key={id}>
            <div className="image-section">
              <Link to="./">
                <img src={image.url} alt="blog" />
              </Link>
            </div>
            <Link to="./" className="blog-link">
              <h1>{title}</h1>
            </Link>
            <p>{context}</p>
            <div className="info">
              <ul className="info-list">
                <li>
                  By Admin <span> |</span>
                </li>
                <li>
                  Fasion
                  <span> |</span>
                </li>
                <li>
                  By Admin
                  <span> |</span>
                </li>
                <li>8 comments</li>
              </ul>
              <div className="btn-blog">
                <Link to="./" className="blog-link">
                  <h2>Contunue Reading</h2>
                </Link>
              </div>
            </div>
          </div>
        ))
      ) : (
        <div>{error || 'Loanding ...'}</div>
      )}
    </div>
  );
};
export default BlogField;
