import React from 'react';
import { render } from '@testing-library/react';
import Home from './Home';

test('renders hello', () => {
  const { getByText } = render(<Home />);
  const headingElement = getByText(/hello notes/i);
  expect(headingElement).toBeInTheDocument();
});
