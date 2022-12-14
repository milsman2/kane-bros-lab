import React from 'react'
import { useIpAddress } from '../../hooks/useIp'

export const IpAddress = () => {
  const { data, error, isLoading, isError } = useIpAddress()
  
  if (isLoading) return <div>Loading your IP address...</div>

  if (isError) return <div>Error: {error.message}</div>

  return (
    <section>
        <p>Your IP Address is: {data?.ip}</p>
    </section>
  )
}