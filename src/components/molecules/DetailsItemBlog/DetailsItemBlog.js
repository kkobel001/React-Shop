import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useAxios } from 'hooks/useAxios';
import './DetailsItemBlog.scss';
import Error from 'components/atoms/Error/Error';
import LoadingIcon from 'components/atoms/LoadingIcon/LoadingIcon';

function DetailsItemBlog() {
  const { articleId } = useParams();

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
      query: `
      {
        article(filter: { id: { eq: ${articleId} } }) {
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
  });

  return response ? (
    <div className="wrapper-blogItems">
      <h2>{response.data.article.title}</h2>
      <img src={response.data.article.image.url} alt="blog-img" />
      <div className="text-blog">{response.data.article.description}</div>
      <br />
      <div className="text-blog">{response.data.article.contend}</div>
    </div>
  ) : (
    <div>{error ? <Error>Sorry, we not load articles for you</Error> : <LoadingIcon />}</div>
  );
}
export default DetailsItemBlog;
