import React from 'react';
import PropTypes from 'prop-types';
import formatCurrency from 'helpers/until';
import MainModal from '../Modal/MainModal';

const ItemListFilter = ({ item, testID }) => (
  <ul className="products">
    <li>
      <div className="section">
        <img data-testid={`image-item-${testID}`} src={item.image.url} alt={item.title} />
        <MainModal item={item} />
      </div>
      <h3>{item.title}</h3>
      <div className="product-price">{formatCurrency(item.price)}</div>
    </li>
  </ul>
);

ItemListFilter.propTypes = {
  item: PropTypes.instanceOf(Object).isRequired,
  testID: PropTypes.number.isRequired,
};

export default ItemListFilter;
