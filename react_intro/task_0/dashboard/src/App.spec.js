import { render, screen } from '@testing-library/react';
import App from './App.jsx';

test('should contain a <p/> element with specific text, <h1/>, and an <img/>', () => {
  render(<App />);

  const headingElement = screen.getByRole('heading', { name: /school dashboard/i });
  const paragraphElement = screen.getByText(/login to access the full dashboard/i);
  const footerParagraphElement = screen.getByText(/copyright/i);
  const imgElement = screen.getByRole('img');

  expect(headingElement).toBeInTheDocument();
  expect(paragraphElement).toBeInTheDocument();
  expect(footerParagraphElement).toBeInTheDocument();
  expect(imgElement).toBeInTheDocument();
});
