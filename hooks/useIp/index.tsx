import ky from 'ky-universal'
import { useQuery } from '@tanstack/react-query'
import { IIpAddress } from '../../src/lib/interfaces/IIpAdress'

const fetchIpAddress = async () => {
  const result: IIpAddress = await ky('https://api.ipify.org/?format=json').json()
  return result
}

const useIpAddress = () => {
  return useQuery(['Ip'], () => fetchIpAddress())
}

export { useIpAddress, fetchIpAddress }