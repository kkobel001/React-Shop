// import Filter from "components/organism/ShopProducts/Filter/Filter";
import AbIm01 from 'assets/images/about-01.png';

const defaultState = {
  count: 1,
  // products: [
  //   { id: 1, title: 'Jacket', color: 'red', size: 'XS', price: 339.22, img: AbIm01 },
  //   { id: 2, title: 'blouse ', color: 'red', size: 'XS', price: 319.22, img: AbIm01 },
  //   { id: 3, title: 'dress', color: 'red', size: 'XS', price: 3229.22, img: AbIm01 },
  // ], // {id, title, desc, price,img}
  allProducts: [
    { id: 1, title: 'Jacket', color: 'red', size: 'XS', price: 339.22, img: AbIm01 },
    { id: 2, title: 'blouse ', color: 'red', size: 'XS', price: 319.22, img: AbIm01 },
    { id: 3, title: 'dress', color: 'red', size: 'XS', price: 3229.22, img: AbIm01 },
  ],
  cart: [],
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
    case 'ADDED_TO_CART': {
      const item = state.allProducts.find(product => product.id === action.payload.id);

      return {
        ...state,
        // eslint-disable-next-line no-shadow
        cart: item ? state.cart.map(item => (item.id === action.payload.id ? { ...item, qty: item.qty + 1 } : item)) : [...state.cart, { ...item, qty: 1 }],
      };
    }
    case 'REMOVE_FROM_CART ':
      return {
        ...state,
        product: state.cart.filter(item => item.id !== action.payload.id),
      };
    case 'UPDATE_QTY':
      return {
        ...state,
        count: action.payload,
      };
    case 'LOAD_CURRENT_ITEM':
      return {
        ...state,
        count: action.payload,
      };
    default:
      return state;
  }
};
