import React from 'react';
import Filter from 'components/organism/ShopProducts/Filter/Filter';
import './Shop.scss';
// import Searchbar from 'components/atoms/Searchbar/Searchbar';
// import axios from 'axios';

const Shop = () => (
  // searchHandler(contents) {
  //   const allProducts = [...this.allProducts].filter(x => x.title.toLowerCase().includes(contents.toLowerCase()));
  //   this.setState({ allProducts });
  // }

  <div className="container-shop">
    {/* <Searchbar onSearch={contents => this.searchHandler(contents)} /> */}
    <Filter />
  </div>
);

// Shop.propTypes = {
//   onSearch: PropTypes.func.isRequired,
// }

export default Shop;
