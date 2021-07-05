import React from 'react';
import './AddQuality.scss';

export default class AddQuality extends React.Component {
  constructor(props) {
    super(props);
    this.state = { qty: 1 };

    this.handleClick = this.handleClick.bind(this);
    this.removeQty = this.removeQty.bind(this);
  }

  handleClick() {
    this.setState(prevState => ({ qty: ++prevState.qty }));
  }

  removeQty() {
    this.setState(prevState => ({ qty: prevState.qty > 0 ? --prevState.qty : 0 }));
  }

  render() {
    const { qty } = this.state;
    return (
      <div className="products-number">
        <button data-testid="button-remove" className="icon-number" type="button" onClick={this.removeQty}>
          <div className="icon-design">-</div>
        </button>

        <div data-testid="counter" className="number-box" min="1" max="10">
          {qty}
        </div>
        <button data-testid="button-add" type="button" className="icon-number" onClick={this.handleClick}>
          <div className="icon-design">+</div>
        </button>
      </div>
    );
  }
}
