import React from 'react';
import { render } from '@testing-library/react';
import AppFront from './AppFront';

test('renders learn react link', () => {
  const { getByText } = render(<AppFront />);
  const linkElement = getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
