import { configureStore } from '@reduxjs/toolkit';
import productReducers from './reducers/productReducers.js';

export default configureStore({
  reducer: {
    order: productReducers,
  },
});
