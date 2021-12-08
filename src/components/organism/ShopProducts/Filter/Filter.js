import React, { Component } from 'react';
// import axios from 'axios';
import LoadingIcon from 'components/atoms/LoadingIcon/LoadingIcon';
import '../Products.scss';
import SimpleButton from 'components/atoms/SimpleButton/SimpleButton';
import ItemListFooter from './ItemListFooter';
import CatchErrorFilter from './CatchErrorFilter';

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

    CatchErrorFilter(
      this.setState({
        allProducts,
        filteredProducts: allProducts,
      }),
      setTimeout(() => {
        this.setState({ loading: false });
      }, 500),
    );
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
    const renderAll = filteredProducts.map(item => <ItemListFooter key={item.id} item={item} />);

    return (
      <>
        <div className="row-button">
          {categories.map(({ name, value }) => (
            <SimpleButton value={value} onClick={this.handleClick(name)} key={name} />
          ))}
        </div>
        <div className="wrapper-shop">{loading ? <LoadingIcon /> : [renderAll]}</div>
      </>
    );
  }
}

export default Filter;
