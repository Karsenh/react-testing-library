import React from 'react';
import Counter from '../Counter';
import { render, fireEvent } from '@testing-library/react';
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

test("Counter initially starts with text '0'", () => {
  const { getByTestId } = render(<Counter />);
  const counterElement = getByTestId('counter');
  expect(counterElement.textContent).toBe('0');
});

test("Input contains initial value of '1'", () => {
  const { getByTestId } = render(<Counter />);
  const inputEl = getByTestId('input');
  expect(inputEl.value).toBe('1');
});

test('Add button renders with +', () => {
  const { getByTestId } = render(<Counter />);
  const addBtn = getByTestId('add-btn');
  expect(addBtn.textContent).toBe('+');
});

test('Subtract button renders with -', () => {
  const { getByTestId } = render(<Counter />);
  const subBtn = getByTestId('sub-btn');
  expect(subBtn.textContent).toBe('-');
});

test('Changing input value works correctly', () => {
  const { getByTestId } = render(<Counter />);
  const inputEl = getByTestId('input');
  //   use 'fireEvent' to test event change
  fireEvent.change(inputEl, {
    target: {
      value: '5',
    },
  });

  expect(inputEl.value).toBe('5');
});

test('Clicking on plus btn adds 1 to counter', () => {
  const { getByTestId } = render(<Counter />);
  const addBtnEl = getByTestId('add-btn');
  const counterEl = getByTestId('counter');

  // Fire an event to test the btns ability to increment
  fireEvent.click(addBtnEl);
  expect(counterEl.textContent).toBe('1');
});

test('Clicking on subtract btn subtracts 1 to counter', () => {
  const { getByTestId } = render(<Counter />);
  const subBtnEl = getByTestId('sub-btn');
  const counterEl = getByTestId('counter');

  // Fire an event to test the btns ability to increment
  fireEvent.click(subBtnEl);
  expect(counterEl.textContent).toBe('-1');
});

test('Changing input value then clicking on add btn works correctly', () => {
  const { getByTestId } = render(<Counter />);
  const addBtnEl = getByTestId('add-btn');
  const counterEl = getByTestId('counter');
  const inputEl = getByTestId('input');

  // Change the input value
  fireEvent.change(inputEl, {
    target: {
      value: '5',
    },
  });

  // Click the add btn
  fireEvent.click(addBtnEl);

  //   Expect our counter to be 5
  expect(counterEl.textContent).toBe('5');
});

test('Adding then subtracting produces the correct count value', () => {
  const { getByTestId } = render(<Counter />);
  const subBtn = getByTestId('sub-btn');
  const addBtn = getByTestId('add-btn');
  const counterEl = getByTestId('counter');
  const inputEl = getByTestId('input');

  fireEvent.change(inputEl, {
    target: {
      value: '10',
    },
  });

  fireEvent.click(addBtn);

  fireEvent.change(inputEl, {
    target: {
      value: '2',
    },
  });

  fireEvent.click(subBtn);
  fireEvent.click(subBtn);

  expect(counterEl.textContent).toBe('6');

  fireEvent.change(inputEl, {
    target: {
      value: '102',
    },
  });

  fireEvent.click(addBtn);

  //   Why does this equate to 8??
  expect(counterEl.textContent).toBe('108');
});
