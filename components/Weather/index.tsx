import React from 'react'
import { useWeather } from '../../hooks/useWeather'

export const Weather = () => {
  const { data, error, isLoading, isError } = useWeather()
  
  if (isLoading) return <div>Loading your weather...</div>

  if (isError) return <span>Error: {error.message}</span>
  
  return (
      <>
        <h2>{data.city.name} 3 Hour Weather Forecast</h2>
        <div>
          {data.list[0].weather[0].description}
        </div>
        <div>
          {data.list[0].main.temp} F
        </div>
      </>
  )
}