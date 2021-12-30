import { render, screen } from '@testing-library/react';
import App from './App';

test('renders Hackacoin app title', () => {
  render(<App />);
  const linkElement = screen.getByText(/Hackacoin/i);
  expect(linkElement).toHaveTextContent();
});
