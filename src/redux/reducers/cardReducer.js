// import AbIm01 from 'assets/images/about-01.png';

const defaultState = {
  count: 1,
  // products: [
  //   { id: 1, title: 'Jacket', color: 'red', size: 'XS', price: 339.22, img: AbIm01 },
  //   { id: 2, title: 'blouse ', color: 'red', size: 'XS', price: 319.22, img: AbIm01 },
  //   { id: 3, title: 'dress', color: 'red', size: 'XS', price: 3229.22, img: AbIm01 },
  // ], // {id, title, desc, price,img}
  currentItem: null,
  cart: [],
};

export const cardReducer = (state = defaultState, action) => {
  switch (action.type) {
    case 'ADDED_TO_CART': {
      const item = state.products.find(product => product.id === action.payload.id);
      // Check if Item is in cart already
      // eslint-disable-next-line no-shadow
      const inCart = state.cart.find(item => item.id === action.payload.id);

      return {
        ...state,
        // eslint-disable-next-line no-shadow
        cart: inCart ? state.cart.map(item => (item.id === action.payload.id ? { ...item, qty: item.qty + 1 } : item)) : [...state.cart, { ...item, qty: 1 }],
      };
    }
    case 'REMOVE_FROM_CART ':
      return {
        ...state,
        cart: state.cart.filter(item => item.id !== action.payload.id),
      };

    case 'LOAD_CURRENT_ITEM':
      return {
        ...state,
        currentItem: action.payload,
      };
    default:
      return state;
  }
};
