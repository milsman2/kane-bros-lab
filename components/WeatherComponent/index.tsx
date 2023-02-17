import { ReactElement, ReactNode } from 'react';
import { UseQueryResult } from '@tanstack/react-query';
import { Weather } from '../../interfaces/';

type WeatherQuery = {
  query: UseQueryResult<Weather, Error>;
  children: ReactNode;
};

export function WeatherComponent({
  query,
  children,
}: WeatherQuery): ReactElement {
  if (query.isError && query.error instanceof Error)
    return <strong>{query.error.message}</strong>;

  if (query.isInitialLoading)
    return <strong className="loading">Loading Lab Area Weather...</strong>;

  return (
    <div className="flex flex-col items-center justify-center bg-slate-800 rounded-md outline-double outline-3 m-8">
      <strong className="font-bold">Lab Area Weather</strong>
      <section className="flex flex-col">{children}</section>
    </div>
  );
}
