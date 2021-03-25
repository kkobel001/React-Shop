import React, { Component } from 'react';
import button from '../../../atoms/Button/Button.scss';
import { productsIt } from '../ProductsItems';
import formatCurrency from '../until';
import '../Products.scss';

const categories = [
  { name: 'All', value: 'All' },
  { name: 'Men', value: 'Men' },
  { name: 'Women', value: 'Women' },
  { name: 'Accessories', value: 'Accessories' },
];

class Filter extends Component {
  constructor() {
    super();
    this.state = {
      allProducts: productsIt,
      filteredProducts: [],
    };
  }

  componentDidMount() {
    const { allProducts } = this.state;

    this.setState({
      filteredProducts: allProducts,
    });
  }

  handleClick = name => () => {
    const { allProducts } = this.state;

    let filteredProducts = [];

    if (name === 'All') {
      filteredProducts = allProducts;
    } else {
      filteredProducts = allProducts.filter(product => product.category === name);
    }

    this.setState({ filteredProducts });
  };

  render() {
    const { filteredProducts } = this.state;

    const renderAll = filteredProducts.map(item => (
      <ul className="products">
        <li item={item} key={item.id}>
          <div className="section">
            <img src={item.image} alt={item.title} />
          </div>

          <h3>{item.title}</h3>
          <div className="product-price">{formatCurrency(item.price)}</div>
        </li>
      </ul>
    ));

    return (
      <>
        <div className="row-info">
          <div className="row-button">
            {categories.map(({ name, value }) => (
              <button type="button" key={name} value={value} onClick={this.handleClick(name)}>
                {name}
              </button>
            ))}
          </div>
        </div>
        <div className="wrapper-shop">{renderAll}</div>
      </>
    );
  }
}

export default Filter;
