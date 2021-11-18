export const datocmsconfig = {
  url: 'https://graphql.datocms.com/',
  headers: {
    authorization: `Bearer ${process.env.REACT_APP_DATOCMS_TOKEN}`,
  },
};
