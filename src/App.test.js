import { render, screen, waitFor } from '@testing-library/react';

jest.mock('./utility/ResolveProfileImagePath', () => ({
  resolveProfileImagePath: jest.fn((imagePath) => imagePath),
}));

import App from './App';
import { linksData } from './linksData';

test('shows the new downloads on the downloads route', async () => {
  window.history.pushState({}, '', '/downloads');

  render(<App />);

  await waitFor(() => {
    expect(screen.getByText('MTNS - Lost Track Of Time edit')).toBeInTheDocument();
    expect(screen.getByText('Put Your Hands Where My Eyes Could See')).toBeInTheDocument();
    expect(screen.getByText("Drake x Loe Shimmy - I'm Spent")).toBeInTheDocument();
  });
});

test('places the Downloads link under Music', () => {
  const downloadsLink = linksData.links.find(({ linkText }) => linkText === 'Downloads');
  expect(downloadsLink.group).toBe('Music');
});

test('shows SoundCloud mixes from newest to oldest', async () => {
  window.history.pushState({}, '', '/mixes');

  const { container } = render(<App />);

  expect(container.querySelector('.App')).toHaveStyle({ width: '100%' });
  const players = await screen.findAllByTitle(/SoundCloud player/);
  expect(players).toHaveLength(2);
  expect(players[0]).toHaveAttribute('height', '300');
  expect(players[0]).toHaveAttribute('width', '100%');
  expect(players[0].parentElement.className).toContain('mixPreviewWrapper');
  expect(players[0]).toHaveAttribute(
    'title',
    'open tabs [002] - house/ukg + groove adjacent SoundCloud player'
  );
  expect(players[1]).toHaveAttribute(
    'title',
    "open tabs [001] - 80's funk/r&b + groove adjacent SoundCloud player"
  );
  expect(
    screen.getByRole('link', { name: 'open tabs [002] - house/ukg + groove adjacent' })
  ).toHaveAttribute('href', 'https://soundcloud.com/summers-over/open-tabs-002-house-ukg-groove');
});
