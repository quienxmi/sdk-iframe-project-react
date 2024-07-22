import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/To use this module, you need to have a backend implementation and the appropriate access credentials./i);
  expect(linkElement).toBeInTheDocument();
});
