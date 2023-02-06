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

  if (query.isInitialLoading)
    return <strong className="loading">Loading Lab Area Weather...</strong>;

  return (
    <div className="collapse">
      <input
        type="checkbox"
        id="weather_dropdown"
        aria-label="weather_dropdown"
      />
      <div className="collapse-title bg-slate-800 flex flex-col text-sm flex-1">
        Lab Area Weather
      </div>
      <div className="collapse-content m-4 flex flex-col flex-1 text-sm">
        {children}
      </div>
    </div>
  );
}
