import Head from 'next/head';
import PersonPage from '../pages/person'
import type { NextPageWithLayout } from './_app'
import Layout from '../components/Layout'

const Home: NextPageWithLayout = () => {
  return (
    <div className='bg-black text-white flex flex-col flex-1 items-center justify-center'>
      <PersonPage />
    </div>
  );
};

export default Home

Home.getLayout = function getLayout(page: React.ReactElement) {
  return (
    <Layout>
      {page}
    </Layout>
  )
}