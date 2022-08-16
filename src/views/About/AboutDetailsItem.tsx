import React, { FC } from 'react';

interface Props {
  title: string,
  contextOne: string,
  contextTwo: string
}

interface ItemProps {
  item: Props,
}

const AboutDetailsItem: FC<ItemProps> = ({ item }) => (
  <div>
    <h2>{item.title}</h2>
    <p>{item.contextOne}</p>
    <p>{item.contextTwo}</p>
  </div>
);

export default AboutDetailsItem;
