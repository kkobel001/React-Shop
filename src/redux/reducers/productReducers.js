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
export const countReducer = (state = { count: 0 }, action) => {
  switch (action.type) {
    case 'INCREASE_COUNT':
      return { ...state, count: action.payload };
    case 'DECREASE_COUNT':
      return { ...state, count: action.payload };

    default:
      return state;
  }
};
