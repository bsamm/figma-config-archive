import { render, screen } from '@testing-library/react';
import App from './App';

test('renders sidebar text', () => {
  render(<App />);
  const linkElement = screen.getByText(/archive/i);
  expect(linkElement).toBeInTheDocument();
});
