import React from 'react'
import { useIpAddress } from '../../hooks/useIp'

export const IpAddress = () => {
  const { data, isLoading, isError } = useIpAddress()
  
  if (isLoading) return <div>Loading your IP address...</div>

  if (isError) return <div>Error being returned on the moment. I am currently working on better error messages.</div>

  return (
    <section>
        <p>Your IP Address is: {data?.ip}</p>
    </section>
  )
}