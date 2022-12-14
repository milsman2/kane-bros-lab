import type { NextPageWithLayout } from './_app'
import Layout from '../components/Layout'
import { IpAddress } from '../components'
import { Weather } from '../components/Weather'

const Home: NextPageWithLayout = () => {

  return (
    <div className='bg-black text-white flex flex-col flex-1 items-center justify-center'>
      <div>More Next.js + TypeScript + React-Query coming soon.</div>
      <IpAddress />
      <Weather />
    </div>
  )
}

export default Home

Home.getLayout = function getLayout(page: React.ReactElement) {
  return (
    <Layout>
      {page}
    </Layout>
  )
}