import { render, screen } from '@testing-library/react';
import App from './App.jsx';

test('should contain a <p/> element with specific text, <h1/>, and an <img/>', () => {
  render(<App />);

  const footerRegex = /copyright \d{4}.*holberton school/i;

  const headingElement = screen.getByRole('heading', { name: /school dashboard/i });
  const paragraphElement = screen.getByText(/login to access the full dashboard/i);
  const footerParagraphElement = screen.getByText(footerRegex);
  const imgElement = screen.getByAltText(/holberton logo/i);

  expect(headingElement).toBeInTheDocument();
  expect(paragraphElement).toBeInTheDocument();
  expect(footerParagraphElement).toBeInTheDocument();
  expect(imgElement).toBeInTheDocument();
});
