import { configureStore } from '@reduxjs/toolkit';
import { countReducer } from './reducers/productReducers.js';
// import { composeWithDevTools } from '@reduxjs/toolkit/dist/devtoolsExtension';

export default configureStore({
  reducer: countReducer,
});
