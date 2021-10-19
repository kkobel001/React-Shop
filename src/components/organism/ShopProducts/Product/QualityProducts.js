import React from 'react';
import { PropTypes } from 'prop-types';
import { connect } from 'react-redux';
import { decreaseCount, increaseCount } from 'redux/actions/actionsNumber';
import './QualityProducts.scss';

const QualityProducts = () => {
  <div className="products-number">
    <Summary summary={this.props.summary} />
    <Increment value={this.props.value} increment={increaseCount} />
    <Decrement value={this.props.value} decrement={decreaseCount} />
  </div>;
};

const Increment = () => (
  <button data-testid="button-remove" className="icon-number" type="button" onClick={decreaseCount}>
    <div className="icon-design">+</div>
  </button>
);
const Decrement = () => (
  <button data-testid="button-remove" className="icon-number" type="button" onClick={increaseCount}>
    <div className="icon-design">+</div>
  </button>
);
const Summary = count => (
  <div data-testid="counter" className="number-box">
    <h2>{count}</h2>
  </div>
);

QualityProducts.propTypes = {
  increaseCount: PropTypes.func.isRequired,
  currentCount: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  count: state.count,
});

const mapDispatchToprops = dispatch => ({
  increment: () => dispatch({ type: 'ADD_TO_CART' }),
  decrement: () => dispatch({ type: 'REMOVE_TO_CART' }),
  //   decreaseCount: currentCount => dispatch(decreaseCount(currentCount - 1)),
});
export default connect(mapStateToProps, mapDispatchToprops)(QualityProducts);

// const mapStateToProps = state => ({
//   count: state.count,
// });
// QualityProducts.propTypes = {
//   increaseCount: PropTypes.func.isRequired,
//   currentCount: PropTypes.func.isRequired,
// };

// const mapDispatchToProps = dispatch => ({
//   decreaseCount: currentCount => dispatch(decreaseCount(currentCount - 1)),
//   increaseCount: currentCount => dispatch(increaseCount(currentCount + 1)),
// });

// export default QualityProducts;

// constructor(props) {
//   super(props);
//   this.state = { qty: 1 };

//   this.handleClick = this.handleClick.bind(this);
//   this.removeQty = this.removeQty.bind(this);
// }

// handleClick() {
//   this.setState(prevState => ({ qty: ++prevState.qty }));
// }

// removeQty() {
//   this.setState(prevState => ({ qty: prevState.qty > 0 ? --prevState.qty : 0 }));
// }

// render() {
//   const { qty } = this.state;
//   return (
