import React from 'react';
import RemoveIcon from '@material-ui/icons/Remove';
import AddIcon from '@material-ui/icons/Add';

export default class AddQuality extends React.Component {
  constructor(props) {
    super(props);
    this.state = { qty: 0 };

    this.addQty = this.addQty.bind(this);
    // this.removeQty = this.removeQty.bind(this);
  }

  addQty() {
    this.setState(state => ({ qty: state.qty + 1 }));
  }

  remnoveQty() {
    this.setState(state => ({ qty: state.qty - 1 }));
  }

  render() {
    const qty = this.state;
    return (
      <div className="products-number">
        <button type="button" onClick={this.addQty}>
          <RemoveIcon className="icon-number" />
        </button>

        <div type="number" className="number-box">
          <h1>{qty}</h1>
        </div>
        <button type="button" onClick={this.removeQty}>
          <AddIcon className="icon-number" />
        </button>
      </div>
    );
  }
}
