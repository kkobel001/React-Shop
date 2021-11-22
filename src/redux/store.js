import { configureStore } from '@reduxjs/toolkit';
import sliceCart from './reducers/sliceCart.js';

export default configureStore({
  reducer: {
    cart: sliceCart,
  },
});
