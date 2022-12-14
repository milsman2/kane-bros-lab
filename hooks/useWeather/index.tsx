import ky from 'ky-universal'
import { useQuery } from '@tanstack/react-query'
import { IWeather } from '../../src/lib/interfaces/IWeather'

const fetchWeather = async (): Promise<IWeather> => {
  const result: IWeather = await ky('https://api.openweathermap.org/data/2.5/forecast?lat=29.7604&lon=-95.3698&appid=b835a15f93cccb6e137195a5b1302084&units=imperial').json()
  return result
}

const useWeather = () => {
  return useQuery<IWeather, Error>(['Weather'], () => fetchWeather())
}

export { useWeather }