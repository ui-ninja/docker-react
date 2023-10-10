import { fireEvent, render } from '@testing-library/react';

import App from './App';

describe('App', () => {
  it('renders counter headline', () => {
    const { getByText } = render(<App />);
    expect(getByText(/counter/i)).toBeInTheDocument();
  });

  it('renders button', () => {
    const { getByRole } = render(<App />);
    const button = getByRole('button');
    fireEvent.click(button);
    expect(button).toHaveTextContent(/Button Clicked - 1 times/i);
  });
});
