import React from 'react';
import RemoveIcon from '@material-ui/icons/Remove';
import AddIcon from '@material-ui/icons/Add';
import './AddQuality.scss';

export default class AddQuality extends React.Component {
  constructor(props) {
    super(props);
    this.state = { qty: 0 };

    this.handleClick = this.handleClick.bind(this);
    this.removeQty = this.removeQty.bind(this);
  }

  handleClick() {
    this.setState(state => ({ qty: state.qty + 1 }));
  }

  removeQty() {
    this.setState(state => ({ qty: state.qty - 1 }));
  }

  render() {
    const { qty } = this.state;
    return (
      <div className="products-number">
        <button type="button" className="icon-number" onClick={this.handleClick}>
          <AddIcon className="icon-design" />
        </button>
        <div className="number-box" min="1" max="10">
          {qty}
        </div>
        <button className="icon-number" type="button" onClick={this.removeQty}>
          <RemoveIcon className="icon-design" />
        </button>
      </div>
    );
  }
}
