import React from 'react';
import PropTypes from 'prop-types';
import MainModal from '../Modal/MainModal';
import formatCurrency from '../../../../helpers/until';

const ItemListFooter = ({ item }) => (
  <ul className="products">
    <li>
      <div className="section">
        <img src={item.image.url} alt={item.title} />
        <MainModal item={item} />
      </div>
      <h3>{item.title}</h3>
      <div className="product-price">{formatCurrency(item.price)}</div>
    </li>
  </ul>
);

ItemListFooter.propTypes = {
  item: PropTypes.instanceOf(Object).isRequired,
};

export default ItemListFooter;
