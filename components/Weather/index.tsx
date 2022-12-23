import React from 'react';
import { useWeather } from '../../hooks/useWeather';
import { Spinner, Heading } from '@chakra-ui/react';

export const Weather = () => {
  const { data, error, isLoading, isError } = useWeather();

  if (isLoading)
    return (
      <div className="flex flex-col flex-1 items-center justify-center">
        <Spinner />
        <Heading>Loading the dashboard...</Heading>
      </div>
    );

  if (isError) return <span>Error: {error.message}</span>;

  return (
    <>
      <h2>{data.city.name} Lab 3 Hour Weather Forecast</h2>
      <div>{data.list[0].weather[0].description}</div>
      <div>{data.list[0].main.temp} F</div>
    </>
  );
};
