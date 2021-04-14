import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Checkbox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isChecked: false,
    };
  }

  toggleCheckboxChange = () => {
    const { handleCheckboxChange, label } = this.props;

    this.setState(({ isChecked }) => ({
      isChecked: !isChecked,
    }));

    handleCheckboxChange(label);
  };

  render() {
    const { label } = this.props;
    const { isChecked } = this.state;

    return (
      <div className="row">
        <label>
          <input type="checkbox" value={label} checked={isChecked} onChange={this.toggleCheckboxChange} />
          <span className="checkmark">{label}</span>
        </label>
      </div>
    );
  }
}
Checkbox.propTypes = {
  handleCheckboxChange: PropTypes.func.isRequired,
  label: PropTypes.string.isRequired,
};

export default Checkbox;
