import React from 'react';
import './SelectDropdown.scss';

class SelectBox1 extends React.Component {
  constructor(props) {
    super(props);

    this.state = { value: 'select' };
  }

  onChange(e) {
    this.setState({
      value: e.target.value,
    });
  }

  render() {
    const { value } = this.state;
    return (
      <>
        <ul className="list-prod" value={value} onChange={this.onChange.bind(this)}>
          <li className="items-prod" value="first">
            dhhdhdhd{' '}
          </li>
          <li className="items-prod" value="second">
            dhhdhdhd{' '}
          </li>
          <li className="items-prod" value="thirt">
            dhhdhdhd{' '}
          </li>
          <li className="items-prod" value="four">
            dhhdhdhd{' '}
          </li>
        </ul>
      </>
    );
  }
}

// const App = () => (
//     <div className="container">
//       <div className="row">
//         <div className="col-sm-4 col-sm-push-4">
//           <SelectBox1 />
//           {/* <SelectBox2 /> */}
//         </div>
//       </div>
//     </div>
//   );

export default SelectBox1;
