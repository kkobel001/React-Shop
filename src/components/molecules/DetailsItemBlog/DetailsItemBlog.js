import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import './DetailsItemBlog.scss';

function DetailsItemBlog() {
  const [detailsArticle, setDetailsArticle] = useState(false);
  const [error, setError] = useState('');
  const { articleId } = useParams();

  useEffect(() => {
    axios
      .post(
        'https://graphql.datocms.com/',
        {
          query: `
          {
            allArticles(filter: { id: { eq: ${articleId} } }) {
                id
                title
                description
                contend
                image
                {
                  url
                }
              }
            }`,
        },
        {
          headers: {
            authorization: `Bearer ${process.env.REACT_APP_DATOCMS_TOKEN}`,
          },
        },
      )
      .then(({ data: { data } }) => {
        if (data.allArticles.length > 0) {
          setDetailsArticle(data.allArticles[0]);
        }
      })
      .catch(() => setError("Sorry, we couln't load articles for you"));
  }, []);

  return detailsArticle ? (
    <div className="wrapper-blogItems">
      <h2>{detailsArticle.title}</h2>
      <img src={detailsArticle.image.url} alt="blog-img" />
      <div className="text-blog">{detailsArticle.description}</div>
      <br />
      <div className="text-blog">{detailsArticle.contend}</div>
    </div>
  ) : (
    <div>{error || 'Loading ...'}</div>
  );
}
export default DetailsItemBlog;
