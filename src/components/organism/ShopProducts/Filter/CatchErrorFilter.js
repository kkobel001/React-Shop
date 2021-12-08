import axios from 'axios';

function CatchErrorFilter() {
  axios
    .post(
      ' https://graphql.datocms.com/',
      {
        query: `
        {
          allProducts {
            id,
            title,
            price,
            image{
              url
            },
            category,
            value
          }
        }`,
      },
      {
        headers: {
          authorization: `Bearer ${process.env.REACT_APP_DATOCMS_TOKEN}`,
        },
      },
    )
    .then(({ data: { data } }) => data)

    .catch(error => console.log(error));
}

export default CatchErrorFilter;
