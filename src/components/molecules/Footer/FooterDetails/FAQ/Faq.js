import React from 'react';
import TitleBox from 'components/atoms/TitleBox/TitleBox';
import { data } from './data';
import './Faq.scss';

const Faq = () => (
  <>
    <TitleBox names="FAQ" />
    <div className="wrapper-faq">
      {data.map(item => (
        <details className="items-faq" key={item.title}>
          <summary>{item.title}</summary>
          <div>
            <p>{item.content}</p>
          </div>
        </details>
      ))}
    </div>
  </>
);

export default Faq;
