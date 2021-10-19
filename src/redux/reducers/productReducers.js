// const productReducer=(state={}, action)

// const initialState = { value: 0 };

// export function counterReducer(state = initialState, action) {
//   if (action.type === 'counter/increment') {
//     return {
//       ...state,
//       value: state.value + 1,
//     };
//   }
//   return state;
// }
export const countReducer = (state = 0, action) => {
  switch (action.type) {
    case 'ADD_TO_CART':
      return {
        ...state,
        count: state.count + 1,
      };
    case 'REMOVE_TO_CART':
      return { ...state, count: state.count + 1 };

    default:
      return state;
  }
};
// export const defaultState = {
//   count: 0,
// };
