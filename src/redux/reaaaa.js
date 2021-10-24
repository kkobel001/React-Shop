import redux from 'redux';

export const initialState = {
  user: JSON.parse(window.localStorage.getItem('token-data')) ?? null,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'set-loading':
      return {
        ...state,
        loading: action.loading,
      };
    case 'login':
      return {
        ...state,
        user: action.user,
      };
    case 'logout':
      return {
        ...state,
        user: null,
      };
    default:
      throw new Error(`nie ma takiej akcji: ${action.type}`);
  }
};

const store = redux.createStore(reducer);

store.dispatch();
