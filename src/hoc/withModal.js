// import React from "react";

// const withModal = Component => {
//   return class ModalComponent extends React.Component {
//     state = {
//       isCollapsed: true,
//     };

//     toggle = () => {
//       this.setState(prevState => ({
//         isCollapsed: !prevState.isCollapsed,
//       }));
//     };

//     render() {
//       const { isCollapsed } = this.state;

//       return (
//         <WrappedComponent
//           isCollapsed={isCollapsed}
//           toggle={this.toggle}
//           {...this.props}
//         />
//       );
//     }
//   };
// };

// export default withCollapse;
