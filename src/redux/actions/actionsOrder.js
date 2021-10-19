export const ADD_TO_CART = 'ADD_TO_CART';
export const UPDATE_CART_UNITS = 'UPDATE_CART_UNITS';

export function addToCartAction({ id, name, description, img, price, units }) {
  return {
    type: ADD_TO_CART,
    payload: { id, name, description, img, price, units },
  };
}

export function updateCartUnits({ id, units }) {
  return {
    type: UPDATE_CART_UNITS,
    payload: { id, units },
  };
}
