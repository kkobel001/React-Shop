export const ADD_TO_CART = 'ADD_TO_CART';
export const UPDATE_CART_UNITS = 'UPDATE_CART_UNITS';

export function addToCartAction({ id, title, price, image, value }) {
  return {
    type: ADD_TO_CART,
    payload: { id, title, price, image, value },
  };
}

export function updateCartUnits({ id, value }) {
  return {
    type: UPDATE_CART_UNITS,
    payload: { id, value },
  };
}
