import React, { useEffect, useState } from 'react';
import TitleBox from 'components/atoms/TitleBox/TitleBox';
import './Regulation.scss';
import axios from 'axios';

const Regulation = () => {
  const [isRegulation, setRegulation] = useState(false);

  useEffect(() => {
    axios
      .post(
        'https://graphql.datocms.com/',
        {
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
        {
          headers: {
            authorization: `Bearer ${process.env.REACT_APP_DATOCMS_TOKEN}`,
          },
        },
      )

      .then(({ data: { data } }) => {
        setRegulation(data.return);
      })
      .catch();
  }, []);

  return isRegulation ? (
    <>
      <TitleBox names="Regulation" />
      <div className="wrapper-regulation " id={isRegulation.id}>
        <h1>{isRegulation.title}</h1>
        <div className="reg-content"> {isRegulation.content}</div>
        <h2>{isRegulation.subtitle}</h2>
        <p> $2 </p>
        <div className="reg-content">{isRegulation.statut}</div>
      </div>
    </>
  ) : (
    <h2> fooor</h2>
  );
};

export default Regulation;
