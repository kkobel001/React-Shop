import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
//

// const dataDetailsItem = [
//   {
//     id: 1,
//     title: 'test',
//     image: 'https://www.thoughtco.com/thmb/C7RiS4QG5TXcBG2d_Sh9i4hFpg0=/3620x2036/smart/filters:no_upscale()/close-up-of-clothes-hanging-in-row-739240657-5a78b11f8e1b6e003715c0ec.jpg',
//     context:
//       'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using  making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search  will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose',
//   },
//   {
//     id: 2,
//     title: 'test',
//     image: 'https://www.thoughtco.com/thmb/C7RiS4QG5TXcBG2d_Sh9i4hFpg0=/3620x2036/smart/filters:no_upscale()/close-up-of-clothes-hanging-in-row-739240657-5a78b11f8e1b6e003715c0ec.jpg',
//     context:
//       'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using  making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search  will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose',
//   },
//   {
//     id: 3,
//     title: 'test',
//     image: 'https://www.thoughtco.com/thmb/C7RiS4QG5TXcBG2d_Sh9i4hFpg0=/3620x2036/smart/filters:no_upscale()/close-up-of-clothes-hanging-in-row-739240657-5a78b11f8e1b6e003715c0ec.jpg',
//     context:
//       'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using  making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search  will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose',
//   },
// ];

function DetailsItemBlog() {
  const [detailsArticle, setDetailsArticle] = useState({});
  const [error, setError] = useState('');
  const { articleId } = useParams();

  useEffect(() => {
    axios
      .post(
        ' https://graphql.datocms.com/',
        {
          query: `
          {
            allArticles(filter: { id: { eq: ${articleId} } }) {
                id
                title
                context
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
        setDetailsArticle(data.allArticles[0]);
      })
      .catch(() => setError("Sorry, we couln't load articles for you"));
  }, []);
  // console.log(detailsArticle);
  return detailsArticle ? (
    <div className="wrapper-blogItems">
      <h2>{detailsArticle.title}</h2>
      {/* <img src={detailsArticle.image.url} alt="ggg" /> */}
      <div>{detailsArticle.context}</div>
    </div>
  ) : (
    <div>{error || 'Loading ...'}</div>
  );
}
export default DetailsItemBlog;
