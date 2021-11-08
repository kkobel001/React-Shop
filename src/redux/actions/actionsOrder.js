export const ADDED_TO_CART = 'ADD_TO_CART';
export const REMOVE_FROM_CART = 'REMOVE_FROM_CART ';
export const UPDATE_QTY = 'UPDATE_QTY ';
export const LOAD_CURRENT_ITEM = 'LOAD_CURRENT_ITEM ';

export const addToCartAction = itemID => ({
  type: ADDED_TO_CART,
  payload: { id: itemID },
});

export const removeCartUnits = itemID => ({
  type: REMOVE_FROM_CART,
  payload: { id: itemID },
});

export const UpdateQty = (itemID, count) => ({
  type: UPDATE_QTY,
  payload: { id: itemID, count },
});

export const loadCurrentItem = item => ({
  type: LOAD_CURRENT_ITEM,
  payload: item,
});
