import { render, fireEvent } from '@testing-library/react';
import React from 'react';
import AddQuality from './AddQuality';

describe('AddQuality', () => {
  it(' correct render counter', () => {
    const { getByTestId } = render(<AddQuality />);
    const inputEl = getByTestId('counter');

    expect(inputEl.textContent).toBe('1');
  });

  it('add button renders with + ', () => {
    const { getByTestId } = render(<AddQuality />);
    const addBtn = getByTestId('button-add');

    expect(addBtn.textContent).toEqual('+');
  });
  it('add button renders with - ', () => {
    const { getByTestId } = render(<AddQuality />);
    const removeBtn = getByTestId('button-remove');

    expect(removeBtn.textContent).toEqual('-');
  });

  it('click on plus btn adds 1 to counter', () => {
    const { getByTestId } = render(<AddQuality />);
    const btnEl = getByTestId('button-add');
    const counterEl = getByTestId('counter');
    fireEvent.click(btnEl);

    expect(counterEl.textContent).toBe('2');
  });
  it('click on minus btn adds 1 to counter', () => {
    const { getByTestId } = render(<AddQuality />);
    const btnEl = getByTestId('button-remove');
    const counterEl = getByTestId('counter');
    fireEvent.click(btnEl);

    expect(counterEl.textContent).toBe('0');
  });
});
