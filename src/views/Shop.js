import React from 'react';
import ProductsItems from '../components/organism/ShopProducts/ProductsItems';
import CardProduct from '../components/organism/ShopProducts/CardProduct';

const Shop = () => {
  const { products } = ProductsItems;

  return (
    <div className="wrapper">
      <h1> Shop</h1>
      <CardProduct>products={products}</CardProduct>
    </div>
  );
};
export default Shop;
