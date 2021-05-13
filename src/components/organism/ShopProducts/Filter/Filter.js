import React, { Component } from 'react';
import axios from 'axios';
import formatCurrency from '../until';
import '../Products.scss';
import MainModal from '../Modal/MainModal';

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
      allProducts: [],
      filteredProducts: [],
    };
  }

  componentDidMount() {
    const { allProducts } = this.state;

    this.setState({
      filteredProducts: allProducts,
    });

    axios
      .post(
        ' https://graphql.datocms.com/',
        {
          query: `
          {
            allProducts {
              id,
              title,
              price,
              image{
                url
              },
              category,
              value
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
        this.setState({
          allProducts: data.allProducts,
          filteredProducts: data.allProducts,
        });
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
        <li key={item.id}>
          <div className="section">
            <img src={item.image.url} alt={item.title} />
            <MainModal />
          </div>
          <h3>{item.title}</h3>
          <div className="product-price">{formatCurrency(item.price)}</div>
        </li>
      </ul>
    ));

    return (
      <>
        <div className="row-button">
          {categories.map(({ name, value }) => (
            <button className="btn-description" type="button" value={value} onClick={this.handleClick(name)}>
              {name}
            </button>
          ))}
        </div>

        <div className="wrapper-shop">{renderAll}</div>
      </>
    );
  }
}

export default Filter;
