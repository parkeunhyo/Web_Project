import { render, screen } from '@testing-library/react';
import Web from './Web';

test('renders learn react link', () => {
  render(<Web />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
