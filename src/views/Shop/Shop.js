import React, { Component } from 'react';
import Filter from 'components/organism/ShopProducts/Filter/Filter';
import './Shop.scss';
// import Searchbar from 'components/atoms/Searchbar/Searchbar';
// import axios from 'axios';

class Shop extends Component {
  searchHandler(contents) {
    const allProducts = [...this.allProducts].filter(x => x.title.toLowerCase().includes(contents.toLowerCase()));
    this.setState({ allProducts });
  }

  render() {
    const { allProducts } = this.state;

    return (
      <div className="container-shop">
        {/* <Searchbar onSearch={contents => this.searchHandler(contents)} /> */}
        <Filter allProducts={allProducts} />
      </div>
    );
  }
}
// Shop.propTypes = {
//   onSearch: PropTypes.func.isRequired,
// }

export default Shop;
