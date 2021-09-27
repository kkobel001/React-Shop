import React, { Component } from 'react';
import axios from 'axios';
import LoadingIcon from 'components/atoms/LoadingIcon/LoadingIcon';

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
      loading: false,
    };
  }

  componentDidMount() {
    const { allProducts } = this.state;

    this.setState({
      filteredProducts: allProducts,
      loading: true,
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

        setTimeout(() => {
          this.setState({ loading: false });
        }, 1500);
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
    const { loading } = this.state;

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

        <div className="wrapper-shop">{loading ? <LoadingIcon /> : [renderAll]}</div>
      </>
    );
  }
}

export default Filter;
