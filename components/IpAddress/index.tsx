import React from 'react'
import { useIpAddress } from '../../hooks/useIp'

export const IpAddress = () => {
  const { data, isLoading } = useIpAddress()
  
  if (isLoading) return <div>Loading your IP address...</div>

  return (
    <section>
        <p>Your IP Address is: {data?.ip}</p>
    </section>
  )
}