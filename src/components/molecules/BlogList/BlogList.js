import React, { useState, useEffect } from 'react';
import './BlogList.scss';
import { Link, useRouteMatch } from 'react-router-dom';
import axios from 'axios';

const BlogList = () => {
  const [articles, setArticles] = useState([]);
  const [error, setError] = useState('');
  const { url } = useRouteMatch();

  useEffect(() => {
    axios
      .post(
        ' https://graphql.datocms.com/',
        {
          query: `
                {
                allArticles {
                    id
                    title
                    description
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
        articles.map(({ id, title, description, image }) => (
          <div className="blog-items" key={id}>
            <div className="image-section">
              <Link to={`${url}/${id}`} className="blog-link">
                <img src={image.url} alt="blog" />
              </Link>
            </div>
            <div className="info-section">
              <Link to={`${url}/${id}`} className="blog-link">
                <h1>{title}</h1>
              </Link>
              <p>{description}</p>
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
                  <Link to={`${url}/${id}`} className="blog-link">
                    <h2>Contunue Reading</h2>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ))
      ) : (
        <div>{error || 'Loading ...'}</div>
      )}
    </div>
  );
};
export default BlogList;
