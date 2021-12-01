import { configureStore } from '@reduxjs/toolkit';
import sliceCart from './slice/sliceCart.js';

export default configureStore({
  reducer: {
    cart: sliceCart,
  },
});
