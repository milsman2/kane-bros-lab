import type { NextPageWithLayout } from './_app'
import Layout from '../components/Layout'

const Index: NextPageWithLayout = () => {
  return (
    <section className='flex flex-col flex-1 bg-black text-white'>
      <h2>Kane Bros. Lab</h2>
      <p>This is just a placeholder while I learn some Typescript and Next.js</p>
      <p>More coming soon!</p>
      <p>Pipeline Test! With Notifications! Hello, world!</p>
    </section>
  )
}

export default Index

Index.getLayout = function getLayout(page: React.ReactElement) {
  return (
    <Layout>
      {page}
    </Layout>
  )
}