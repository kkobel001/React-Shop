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
      const itemIndex = state.cartItems.findIndex(cartElement => cartElement.item.id === action.payload.item.id);
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
  decreaseCart(state, action) {
    const itemIndex = state.cartItems.findIndex(item => item.id === action.payload.id);

    if (state.cartItems[itemIndex].cartQuantity > 1) {
      state.cartItems[itemIndex].cartQuantity -= 1;
    } else if (state.cartItems[itemIndex].cartQuantity === 1) {
      const nextCartItems = state.cartItems.filter(item => item.id !== action.payload.id);

      state.cartItems = nextCartItems;
    }

    localStorage.setItem('cartItems', JSON.stringify(state.cartItems));
  },
});

export const { addProduct } = orderSlice.actions;
export default orderSlice.reducer;

// export const countReducer = (state, action) => {
//   switch (action.type) {
//     case 'ADD_TO_CART':
//       if (state.count === 15) {
//         return state;
//       }
//       return {
//         ...state,
//         count: state.count + 1,
//       };
//     case 'REMOVE_TO_CART':
//       if (state.count === 1) {
//         return state;
//       }
//       return { ...state, count: state.count - 1 };
//     // case 'ADD_ITEM_TO_CART':
//     //   if (state.count > 0) return state;
//     //   return {
//     //     ...state,
//     //     cartItems: state.count,
//     //   };

//     default:
//       return state;
//   }
// };
