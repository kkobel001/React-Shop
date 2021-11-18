// export const ADD_ITEM_TO_CART = 'ADD_ITEM_TO_CART';
export const REMOVE_ITEM_FROM_CART = 'REMOVE_ITEM_FROM_CART';

// export const addItemToCart = payload => ({
//   type: ADD_ITEM_TO_CART,
//   payload,
// });

export const removeItemFromCart = payload => ({
  type: REMOVE_ITEM_FROM_CART,
  payload,
});

const initialState = {
  order: [
    { id: 2, title: 'blouse ', color: 'red', size: 'XS', price: 319.22 },
    { id: 3, title: 'dress', color: 'red', size: 'XS', price: 3229.22 },
  ],
};

export const orderReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_ITEM_TO_CART':
      return {
        ...state,
        order: [...state.order, action.payload],
      };

    case 'REMOVE_ITEM_FROM_CART':
      return {};

    default:
      return state;
  }
};
