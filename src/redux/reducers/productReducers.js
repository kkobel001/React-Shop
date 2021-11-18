import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  count: 0,
  cartItems: localStorage.getItem('cartItems') ? JSON.parse(localStorage.getItem('cartItems')) : [],
  cartTotal: 0,
};

const orderSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addProduct(state, action) {
      const itemIndex = state.cartItems.findIndex(item => item.id === action.payload.id);
      if (itemIndex >= 0) {
        state.cartItems[itemIndex].cartQuantity += 1;
      } else {
        const conProduct = { ...action.payload, cartQuantity: 1 };
        state.cartItems.push(conProduct);
      }

      localStorage.setItem('cartItems', JSON.stringify(state.cartItems));
    },

    // removeProduct(state, action) {},
  },
});

export const { addProduct } = orderSlice.actions;
export default orderSlice.reducer;

export const countReducer = (state, action) => {
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
