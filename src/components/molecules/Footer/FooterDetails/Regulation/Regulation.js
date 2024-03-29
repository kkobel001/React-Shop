import React from 'react';
import TitleBox from 'components/atoms/TitleBox/TitleBox';
import './Regulation.scss';
import { useAxios } from 'hooks/useAxios';

const Regulation = () => {
  const { response } = useAxios({
    method: 'POST',
    url: 'https://graphql.datocms.com/',
    headers: {
      authorization: `Bearer ${process.env.REACT_APP_DATOCMS_TOKEN}`,
    },
    data: {
      query: `
            {
                return {
                    id
                    title
                    content
                    subtitle
                    statut
                }
            }`,
    },
  });

  return response ? (
    <>
      <TitleBox names="Regulation" />
      <div className="wrapper-regulation " id={response.data.return.id}>
        <h1>{response.data.return.title}</h1>
        <div className="reg-content"> {response.data.return.content}</div>
        <h2>{response.data.return.subtitle}</h2>
        <div className="reg-content">{response.data.return.statut}</div>
      </div>
    </>
  ) : null;
};

export default Regulation;
