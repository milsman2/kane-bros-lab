import { FC } from 'react'
import { AppProps } from 'next/app'
import { QueryClientProvider, QueryClient } from 'react-query'
import '../styles/globals.css'

const reactQueryClient = new QueryClient()

const MyApp: FC<AppProps> = ({ Component, pageProps }: AppProps) => {
  return (
    <QueryClientProvider client={reactQueryClient}>
      <Component {...pageProps} />
    </QueryClientProvider>
  )
}

export default MyApp