import { configureStore } from '@reduxjs/toolkit';
import { countReducer } from './reducers/productReducers.js';
// export default configureStore({
//   reducer: {},
// });
// export store = configureStore(countReducer);

// // console.log(store.getState());

// store.dispatch({ type: 'conter/increment' });

export default configureStore({
  reducer: {
    count: countReducer,
  },
});
