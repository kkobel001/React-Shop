const defaultState = {
  count: 1,
};

export const countReducer = (state = defaultState, action) => {
  switch (action.type) {
    case 'ADD_TO_CART':
      if (state.count === 15) {
        return state;
      }
      return {
        ...state,
        count: state.count + 1,
      };
    case 'REMOVE_TO_CART':
      if (state.count === 1) {
        return state;
      }
      return { ...state, count: state.count - 1 };
    default:
      return state;
  }
};
