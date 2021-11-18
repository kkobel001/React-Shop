import React from 'react';
import { useParams } from 'react-router-dom';
import { useAxios } from 'hooks/useAxios';
import './DetailsItemBlog.scss';
import { datocmsconfig } from 'services/datocms';

function DetailsItemBlog() {
  const { articleId } = useParams();
  const { response, error } = useAxios({
    method: 'POST',
    datocmsconfig,
    data: {
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
  });

  return response ? (
    <div className="wrapper-blogItems">
      <h2>{response.data.allArticles.title}</h2>
      <img src={response.data.allArticles.image.url} alt="blog-img" />
      <div className="text-blog">{response.data.allArticles.description}</div>
      <br />
      <div className="text-blog">{response.data.allArticles.contend}</div>
    </div>
  ) : (
    <div>{error || 'Loading ...'}</div>
  );
}
export default DetailsItemBlog;
