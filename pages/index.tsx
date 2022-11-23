import type { NextPageWithLayout } from './_app'
import Layout from '../components/layout'
import Header from '../components/header'
import Footer from '../components/footer'


const Index: NextPageWithLayout = () => {
  return (
    <div className='bg-black text-white flex flex-col flex-1'>
      <p>Moving over to TypeScript and SWR.</p>
    </div>
  )
}

export default Index

Index.getLayout = function getLayout(page: React.ReactElement) {
  return (
    <Layout>
      <Header />
      {page}
      <Footer />
    </Layout>
  )
}