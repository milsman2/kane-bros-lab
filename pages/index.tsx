import { useState } from 'react'
import type { NextPageWithLayout } from './_app'
import Layout from '../components/Layout'
import Counter from '../components/Counter'
import List from '../components/List'

const Home: NextPageWithLayout = () => {
  const [count, setCount] = useState<number>(1)

  return (
    <div className='bg-black text-white flex flex-col flex-1 items-center justify-center'>
      <Counter setCount={setCount}>Count is {count}</Counter>
      <List items={["Coffee", "Tacos", "Code"]} render={(item: string) => <span>{item}</span>} />
      <div>More Next.js + TypeScript + React-Query coming soon.</div>
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