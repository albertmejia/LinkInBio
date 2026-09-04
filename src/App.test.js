import { render, screen, waitFor } from '@testing-library/react';

jest.mock('./utility/ResolveProfileImagePath', () => ({
  resolveProfileImagePath: jest.fn((imagePath) => imagePath),
}));

import App from './App';

test('shows the new downloads on the downloads route', async () => {
  window.history.pushState({}, '', '/downloads');

  render(<App />);

  await waitFor(() => {
    expect(screen.getByText('MTNS - Lost Track Of Time edit')).toBeInTheDocument();
    expect(screen.getByText('Put Your Hands Where My Eyes Could See')).toBeInTheDocument();
    expect(screen.getByText("Drake x Loe Shimmy - I'm Spent")).toBeInTheDocument();
  });
});
