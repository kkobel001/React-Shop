import React, { useEffect } from 'react';
import './BlogList.scss';
import { Link, useRouteMatch } from 'react-router-dom';
import LoadingIcon from 'components/atoms/LoadingIcon/LoadingIcon';
import { useAxios } from 'hooks/useAxios';
import Error from 'components/atoms/Error/Error';

const BlogList = () => {
  const { url } = useRouteMatch();

  useEffect(() => {
    setTimeout(() => {}, 500);
  }, []);

  const { response, error } = useAxios({
    method: 'POST',
    url: 'https://graphql.datocms.com/',
    headers: {
      authorization: `Bearer ${process.env.REACT_APP_DATOCMS_TOKEN}`,
    },
    data: {
      query: `{
        allArticles {
          id
          title
          description
          image {
                url
              }
          }
        },`,
    },
  });
  return (
    <div className="wrapper-blog">
      {response ? (
        response.data.allArticles.map(({ id, title, description, image }) => (
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
        <div>{error ? <Error>Sorry, we coulnd not load articles for you</Error> : <LoadingIcon />}</div>
      )}
    </div>
  );
};
export default BlogList;
