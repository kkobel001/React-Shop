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
const defaultState = {
  count: 1,
};

export const countReducer = (state = defaultState, action) => {
  switch (action.type) {
    case 'ADD_TO_CART':
      return {
        ...state,
        count: state.count + 1,
      };
    case 'REMOVE_TO_CART':
      return { ...state, count: state.count - 1 };

    default:
      return state;
  }
};
