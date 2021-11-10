import { createSlice } from '@reduxjs/toolkit';

import AbIm01 from 'assets/images/about-01.png';

const initialOrderState = {
  count: 0,
  allProducts: [
    { id: 1, title: 'Jacket', color: 'red', size: 'XS', price: 339.22, img: AbIm01, count: 5 },
    { id: 2, title: 'blouse ', color: 'red', size: 'XS', price: 319.22, img: AbIm01, count: 1 },
    { id: 3, title: 'dress', color: 'red', size: 'XS', price: 3229.22, img: AbIm01, count: 8 },
  ],
  cartItems: [],
  cartTotal: 0,
};

const orderSlice = createSlice({
  name: 'cart',
  initialState: initialOrderState,
  reducers: {
    addProduct(state, action) {
      state.cartItems.push(action.payload);
    },
    // removeProduct(state, action) {},
  },
});

export const { addProduct } = orderSlice.actions;
export default orderSlice.reducer;

export const countReducer = (state = initialOrderState, action) => {
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
    // case 'ADD_ITEM_TO_CART':
    //   if (state.count > 0) return state;
    //   return {
    //     ...state,
    //     cartItems: state.count,
    //   };

    case 'ADD_ITEM_TO_CART':
      // eslint-disable-next-line no-case-declarations
      // const item = state.allProducts.find(product => product.id === action.payload.id);

      //     const inCart = state.cart.find((item) =>
      //   item.id === action.payload.id
      // );

      return {
        ...state,
        cart: [...state.cart, action.payload],
      };

    case 'UPDATE_CART_ITEM':
      return {
        ...state,
        // cart: state.cart.map(item => (item.id === action.payload.id ? { ...item, count: +action.payload.count } : item)),
      };

    default:
      return state;
  }
};
