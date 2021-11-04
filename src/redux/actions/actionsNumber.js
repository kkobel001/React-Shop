export const ADD_TO_CART = 'ADD_TO_CART';
export const REMOVE_TO_CART = 'REMOVE_TO_CART';

export const decreaseCount = count => ({
  type: 'REMOVE_TO_CART',
  payload: count - 1,
});
export const increaseCount = count => ({
  type: 'ADD_TO_CART',
  payload: count + 1,
});

export const currentItem = count => ({
  type: 'CURRENT_CART',
  payload: count + 1,
});

// export const addToCartAction = itemID => ({
//   type: ADDED_TO_CART,
//   payload: { id: itemID },
// });

// export const removeCartUnits = itemID => ({
//   type: REMOVE_FROM_CART,
//   payload: { id: itemID },
// });

// export const UpdateQty = (itemID, value) => ({
//   type: UPDATE_QTY,
//   payload: { id: itemID, count: value },
// });
