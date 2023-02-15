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
    <div className="collapse">
      <input
        type="checkbox"
        id="weather_dropdown"
        aria-label="weather_dropdown"
      />
      <div className="collapse-title flex flex-row bg-slate-800 m-1">
        Lab Area Weather
        <svg
          className="fill-current"
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 24 24"
        >
          <path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" />
        </svg>
      </div>
      <div className="collapse-content m-2">{children}</div>
    </div>
  );
}
