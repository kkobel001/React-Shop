import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  cartItems: localStorage.getItem('cartItems') ? JSON.parse(localStorage.getItem('cartItems')) : [],
  cartTotalQuantity: localStorage.getItem('cartTotalQuantity') ? JSON.parse(localStorage.getItem('cartTotalQuantity')) : 0,
  cartTotalAmount: localStorage.getItem('cartTotalAmount') ? JSON.parse(localStorage.getItem('cartTotalAmount')) : 0,
};

const prepareCartTotal = state => {
  let cartTotalQuantity = 0;
  let cartTotalAmount = 0;

  state.cartItems.forEach(item => {
    cartTotalQuantity = item.cartQuantity + cartTotalQuantity;
    cartTotalAmount = item.price * item.cartQuantity + cartTotalAmount;
  });

  state.cartTotalQuantity = cartTotalQuantity;
  localStorage.setItem('cartTotalQuantity', JSON.stringify(cartTotalQuantity));

  state.cartTotalAmount = cartTotalAmount;
  localStorage.setItem('cartTotalAmount', JSON.stringify(cartTotalAmount));
};

const orderSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    increaseProduct(state, action) {
      const itemIndex = state.cartItems.findIndex(cartElement => cartElement.id === action.payload.id && cartElement.color === action.payload.color && cartElement.size === action.payload.size);
      if (itemIndex >= 0) {
        state.cartItems[itemIndex].cartQuantity += 1;
      } else {
        const product = { ...action.payload, cartQuantity: 1 };
        state.cartItems.push(product);
      }
      localStorage.setItem('cartItems', JSON.stringify(state.cartItems));
      prepareCartTotal(state);
    },

    decreaseProduct(state, action) {
      const itemIndex = state.cartItems.findIndex(cartElement => cartElement.id === action.payload.id && cartElement.color === action.payload.color && cartElement.size === action.payload.size);

      if (state.cartItems[itemIndex].cartQuantity > 1) {
        state.cartItems[itemIndex].cartQuantity -= 1;
      } else if (state.cartItems[itemIndex].cartQuantity === 1) {
        const nextCartItems = state.cartItems.filter(cartElement => cartElement.id !== action.payload.id && cartElement.color !== action.payload.color && cartElement.size !== action.payload.size);
        console.log(nextCartItems);

        state.cartItems = nextCartItems;
      }

      localStorage.setItem('cartItems', JSON.stringify(state.cartItems));
      prepareCartTotal(state);
    },

    removeProduct(state, action) {
      const nextCartItems = state.cartItems.filter(cartElement => cartElement.id !== action.payload.id);
      state.cartItems = nextCartItems;
      localStorage.setItem('cartItems', JSON.stringify(state.cartItems));
      prepareCartTotal(state);
    },
  },
});

export const { increaseProduct, decreaseProduct, removeProduct } = orderSlice.actions;
export default orderSlice.reducer;
