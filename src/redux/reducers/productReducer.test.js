import countReducer from './productReducers';

describe('productReducer', () => {
  describe('counter', () => {
    it('should provide the initial state', () => {
      expect(countReducer(undefined, {})).toBe(0);
    });

    it('should handle INCREMENT action', () => {
      expect(countReducer(1, { type: 'INCREMENT' })).toBe(2);
    });

    it('should handle DECREMENT action', () => {
      expect(countReducer(1, { type: 'DECREMENT' })).toBe(0);
    });

    it('should ignore unknown actions', () => {
      expect(countReducer(1, { type: 'unknown' })).toBe(1);
    });
  });
});
