import React from 'react';
import Counter from '../Counter';
import { render } from '@testing-library/react';
// Allow use of 'expect' key-word
import '@testing-library/jest-dom/extend-expect';

// Takes two params - 1. Description of what it's doing 2. A function which will contain the logic for our test
test('Header renders with correct text', () => {
  // Render component in virtual dom
  const component = render(<Counter />);

  // Check if that component contains the heading text
  const headerElement = component.getByTestId('header');

  // Define our expectations
  expect(headerElement.textContent).toBe('My Counter');
});
