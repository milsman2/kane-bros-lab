import { ReactElement, ReactNode } from 'react';
import { UseQueryResult } from '@tanstack/react-query';
import { Weather } from '../../interfaces/Weather';
import { ApiFetchError } from '../../hooks';

type WeatherQuery = {
  query: UseQueryResult<Weather, ApiFetchError>;
  children: ReactNode;
};

export function WeatherComponent({
  query,
  children,
}: WeatherQuery): ReactElement {
  if (query.isError && query.error instanceof Error)
    return <strong>{query.error.message}</strong>;

  if (query.isInitialLoading) return <div>Loading...</div>;

  return <div className="text-slate-200">{children}</div>;
}
