import React from 'react';
import { useSelector, useDispatch, connect } from 'react-redux';
import { increaseCount, decreaseCount } from 'redux/actions';
import './QualityProducts.scss';

const QualityProducts = () => {
  const count = useSelector(state => state.count);
  const dispatch = useDispatch();

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

  // const { qty } = this.state;
  return (
    <div className="products-number">
      <button data-testid="button-remove" className="icon-number" type="button" onClick={() => dispatch(decreaseCount(count))}>
        <div className="icon-design">-</div>
      </button>

      <div data-testid="counter" className="number-box" min="1" max="10">
        {count}
      </div>
      <button data-testid="button-add" type="button" className="icon-number" onClick={() => dispatch(increaseCount(count))}>
        <div className="icon-design">+</div>
      </button>
    </div>
  );
};

const mapStateToProps = state => ({
  count: state.count,
});

const mapDispatchToProps = dispatch => ({
  decreaseCount: count => dispatch(decreaseCount(count)),
  increaseCount: count => dispatch(increaseCount(count)),
});

export default connect(mapStateToProps, mapStateToProps, mapDispatchToProps)(QualityProducts);
