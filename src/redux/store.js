import { configureStore } from '@reduxjs/toolkit';
import { orderReducer } from 'redux/actions/actionsOrder.js';
// import { countReducer, } from './reducers/productReducers.js';
import productReducers from './reducers/productReducers.js';

import { cardReducer } from './reducers/cardReducer.js';

// import { composeWithDevTools } from '@reduxjs/toolkit/dist/devtoolsExtension';

export default configureStore({
  reducer: cardReducer,
  orderReducer,
  order: productReducers,
});
