import React, { useState, useEffect } from 'react';
import './BlogField.scss';
import { Link } from 'react-router-dom';
import axios from 'axios';

const API_TOKEN = '912d5eb47047efc0e6d894bd50bbc0';

const BlogField = () => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    axios
      .post(
        ' https://graphql.datocms.com/',
        {
          query: `
                {allArticles{
                    id
                    title
                    context
                    image
                    {
                      url
                    }
                    
                  }},`,
        },
        {
          headers: {
            authorization: `Bearer ${API_TOKEN}`,
          },
        },
      )
      .then(({ data: { data } }) => {
        setArticles(data.allArticles);
      })
      .catch(err => console.log(err));
  });

  return (
    <div className="wrapper-blog">
      {articles.map(({ title, context, image }) => (
        <div className="blog-items" key={title}>
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
      ))}
    </div>
  );
};

export default BlogField;
