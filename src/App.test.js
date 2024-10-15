import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';

test('toggles text on button click depending on state', () => {
  // Render the App component
  render(<App />);

  // Find the button element by its text
  const button = screen.getByRole('button', { name: /Show Text/i });

  // Verify that the text is not visible
  expect(screen.queryByText(/Hello, this is the new text!/i)).toBeNull();

  // Click the button to show text
  fireEvent.click(button);

  // Verify that the text is now showing
  expect(screen.getByText(/Hello, this is the new text!/i)).toBeInTheDocument();

  // checking to see if button text has changed to "Hide Text"
  expect(button.textContent).toBe('Hide Text');

  // Click the button again to hide the text
  fireEvent.click(button);

  // Verify that the text is no longer visible
  expect(screen.queryByText(/Hello, this is the new text!/i)).toBeNull();

  // check to see the button text has changed back to "Show Text"
  expect(button.textContent).toBe('Show Text');
});
