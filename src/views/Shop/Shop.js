import React from 'react';
import Filter from 'components/organism/ShopProducts/Filter/Filter';
import './Shop.scss';
import MainTemplates from 'templates/MainTemplates';

const Shop = () => (
  <MainTemplates>
    <div className="container-shop">
      <Filter />
    </div>
  </MainTemplates>
);
export default Shop;
