export const reducer = (state, action) => {
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

export const initialState = {
  user: JSON.parse(window.localStorage.getItem('token-data')) ?? null,
};
