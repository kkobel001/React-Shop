import React from 'react';

export default class SubModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isSubOpen: false };
  }

  openSubModal = () => {
    this.setState({
      isSubOpen: true,
    });
  };

  hideSubModal = () => {
    this.setState({
      isSubOpen: false,
    });
  };

  render() {
    const { hideSubModal, isSubOpen } = this.state;
    return (
      <div className="layout-page">
        <main className="layout-main">
          <div className="container">
            <hr />

            <div className="submodal" isOpen={isSubOpen} onRequestHide={hideSubModal}>
              <button type="button" onClick={hideSubModal}>
                hhhhhhh
              </button>
              <h1>Sub Modal title</h1>

              <button type="button" className="btn btn-default" onClick={hideSubModal}>
                Close
              </button>
            </div>
          </div>
        </main>
      </div>
    );
  }
}

//   function run() {
//     ReactDOM.render( < App / > , document.getElementById('app'));
//   }

//   if (window.addEventListener) {
//     window.addEventListener('DOMContentLoaded', run);
//   } else {
//     window.attachEvent('onload', run);
//   }
