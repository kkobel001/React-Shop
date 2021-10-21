import React from 'react';
import { PropTypes } from 'prop-types';
import { connect } from 'react-redux';
import { decreaseCount as decreaseItem, increaseCount as increaseItem } from 'redux/actions/actionsNumber';
import './QualityProducts.scss';

const QualityProducts = ({ count, increaseCount, decreaseCount }) => (
  <div className="products-number">
    <button data-testid="button-add" className="icon-number" type="button" onClick={increaseCount}>
      +
    </button>
    <div>
      <div data-testid="counter" className="number-box">
        {count}
      </div>
    </div>
    <button data-testid="button-remove" className="icon-number" type="button" onClick={decreaseCount}>
      -
    </button>
  </div>
);

QualityProducts.propTypes = {
  increaseCount: PropTypes.func.isRequired,
  decreaseCount: PropTypes.func.isRequired,
  count: PropTypes.number.isRequired,
};

const mapStateToProps = state => ({
  count: state.count,
});

const mapDispatchToprops = dispatch => ({
  decreaseCount: props => dispatch(decreaseItem(props - 1)),
  increaseCount: props => dispatch(increaseItem(props - 2)),
});
export default connect(mapStateToProps, mapDispatchToprops)(QualityProducts);
