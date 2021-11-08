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
