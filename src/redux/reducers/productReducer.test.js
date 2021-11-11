import { countReducer } from './productReducers';

describe('productReducer', ({ state }) => {
  // describe('counter', () => {
  //   it('should provide the initial state', () => {
  //     expect(countReducer(undefined, {})).toBe(0);
  //   });

  it('should handle INCREMENT action', () => {
    expect(countReducer({ type: 'ADD_TO_CART' })).toBe(state + 1);
  });

  it('should handle DECREMENT action', () => {
    expect(countReducer({ type: 'REMOVE_TO_CART' })).toBe(0);
  });

  // it('should ignore unknown actions', () => {
  //   expect(countReducer(1, { type: 'unknown' })).toBe(1);
  // });
});
// });
