import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  cartItems: localStorage.getItem('cartItems') ? JSON.parse(localStorage.getItem('cartItems')) : [],
  cartTotal: 0,
};

const orderSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    increaseProduct(state, action) {
      const itemIndex = state.cartItems.findIndex(cartElement => cartElement.id === action.payload.id);
      if (itemIndex >= 0) {
        state.cartItems[itemIndex].cartQuantity += 1;
      } else {
        const conProduct = { ...action.payload, cartQuantity: 1 };
        state.cartItems.push(conProduct);
      }

      localStorage.setItem('cartItems', JSON.stringify(state.cartItems));
    },

    decreaseProduct(state, action) {
      const itemIndex = state.cartItems.findIndex(cartElement => cartElement.id === action.payload.id);

      if (state.cartItems[itemIndex].cartQuantity > 1) {
        state.cartItems[itemIndex].cartQuantity -= 1;
      } else if (state.cartItems[itemIndex].cartQuantity === 1) {
        const nextCartItems = state.cartItems.filter(cartElement => cartElement.id !== action.payload.id);
        state.cartItems = nextCartItems;
      }

      localStorage.setItem('cartItems', JSON.stringify(state.cartItems));
    },

    removeProduct(state, action) {
      const nextCartItems = state.cartItems.filter(cartElement => cartElement.id !== action.payload.id);
      state.cartItems = nextCartItems;
      localStorage.setItem('cartItems', JSON.stringify(state.cartItems));
    },
  },
});

export const { increaseProduct, decreaseProduct, removeProduct } = orderSlice.actions;
export default orderSlice.reducer;
