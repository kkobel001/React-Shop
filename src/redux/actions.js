export const decreaseCount = currentCount => ({
  type: 'DECREASE_COUNT',
  payload: currentCount - 1,
});

export const increaseCount = currentCount => ({
  type: 'INCREASE_COUNT',
  payload: currentCount + 1,
});
