import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const cookbookHeader = screen.getByText(/CookBook/i);
  expect(cookbookHeader).toBeInTheDocument();
});
