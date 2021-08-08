import React from 'react';
import Counter from '../Counter';
import { render } from '@testing-library/react';
// Allow use of 'expect' key-word
import '@testing-library/jest-dom/extend-expect';

// Takes two params - 1. Description of what it's doing 2. A function which will contain the logic for our test
test('Header renders with correct text', () => {
  // Render component in virtual dom
  const { getByTestId } = render(<Counter />);
  // Check if that component contains the heading text
  const headerElement = getByTestId('header');
  // Define our expectations
  expect(headerElement.textContent).toBe('My Counter');
});

test("counter initially starts with text '0'", () => {
  const { getByTestId } = render(<Counter />);

  const counterElement = getByTestId('counter');

  expect(counterElement.textContent).toBe('0');
});

test("input contains initial value of '1'", () => {
  const { getByTestId } = render(<Counter />);
  const inputEl = getByTestId('input');

  expect(inputEl.value).toBe('1');
});

test('add button renders with +', () => {
  const { getByTestId } = render(<Counter />);
  const addBtn = getByTestId('add-btn');
  expect(addBtn.textContent).toBe('+');
});

test('subtract button renders with -', () => {
  const { getByTestId } = render(<Counter />);
  const subBtn = getByTestId('sub-btn');
  expect(subBtn.textContent).toBe('-');
});
