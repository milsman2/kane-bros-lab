import { FC } from 'react';
import Head from 'next/head';
import Footer from '../src/components/footer'
import Header from '../src/components/header'
import PersonPage from '../pages/person'

const Home: FC = () => {
  return (
    <div className='flex flex-col flex-1 bg-black text-white min-h-screen'>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <main className='flex flex-col flex-1 justify-center items-center'>
        <PersonPage />
      </main>
      <Footer />
    </div>
  );
};

export default Home;