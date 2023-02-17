// __tests__/index.test.jsx

import { render, screen } from '@testing-library/react';
import Home from '../pages/index';
import '@testing-library/jest-dom';
import { QueryClientProvider } from '@tanstack/react-query';
import { QueryClient } from '@tanstack/react-query';

describe('Home', () => {
  it('renders a heading', () => {
    render(
      <QueryClientProvider client={new QueryClient()}>
        <Home />
      </QueryClientProvider>
    );

    const heading = screen.getByRole('article');

    expect(heading).toBeInTheDocument();
  });
});
