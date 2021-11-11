export const ADD_TO_CART = 'ADD_TO_CART';
export const REMOVE_TO_CART = 'REMOVE_TO_CART';
export const CURRENT_ITEM = 'CURRENT_ITEM';
export const REMOVE_STOCK_ITEM = 'REMOVE_STOCK_ITEM';
export const ADD_ITEM_TO_CART = 'ADD_ITEM_TO_CART';

export const decreaseCount = count => ({
  type: 'REMOVE_TO_CART',
  payload: count - 1,
});
export const increaseCount = count => ({
  type: 'ADD_TO_CART',
  payload: count + 1,
});

export const currentItem = item => ({
  type: 'CURRENT_ITEM',
  payload: item,
});

// export const addProduct = (payload, id) => ({
//   type: 'ADD_ITEM_TO_CART',
//   payload: { id, ...payload },
// });

// export const updateCartItem = (itemID, count) => ({
//   type: 'UPDATE_CART_ITEM',
//   payload: {
//     id: itemID,
//     count,
//   },
// });
// export const removeProduct = payload => ({
//   type: 'REMOVE_STOCK_ITEM',
//   payload: { payload },
// });
