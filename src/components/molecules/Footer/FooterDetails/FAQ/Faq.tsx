import React, { FC } from 'react';
import TitleBox from 'components/atoms/TitleBox/TitleBox';
import { data } from './data';
import './Faq.scss';

interface itemProps {
  title: string,
  content: string,
}

interface dataProps {
  data: itemProps[]
}

const Faq: FC<dataProps> = () => (
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
