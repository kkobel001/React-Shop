import { configureStore } from '@reduxjs/toolkit';
import { countReducer } from './reducers/productReducers.js';

export default configureStore({
  reducer: countReducer,
});
