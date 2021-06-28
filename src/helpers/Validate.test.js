import { validateRegister } from './Validate';

it('returns valid when the task is properly formatted', () => {
  const name = '';

  const result = validateRegister(name);

  expect(result).toEqual({ errors: 'Name is required', name: null });
});
