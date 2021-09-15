import React from 'react';
import Filter from 'components/organism/ShopProducts/Filter/Filter';
import './Shop.scss';
import Searchbar from 'components/atoms/Searchbar/Searchbar';

const Shop = () => (
  <div className="container-shop">
    <Searchbar />
    <Filter />
  </div>
);
export default Shop;
