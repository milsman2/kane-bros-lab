import type { NextPageWithLayout } from './_app'
import Layout from '../components/layout'
import Header from '../components/header'
import Footer from '../components/footer'
import fetch from '../libs/fetch'
import Link from 'next/link'

import useSWR from 'swr'

const Index: NextPageWithLayout = () => {
  const { data } = useSWR<string[]>('/api/data', fetch)
  const { data: data2 } = useSWR(null, fetch)

  return (
    <div className='bg-black text-white flex flex-col flex-1'>
      <h1>Trending Projects</h1>
      {data2}
      <div>
        {data
          ? data.map(project => (
              <p key={project}>
                <Link href="/[user]/[repo]" as={`/${project}`}>
                  {project}
                </Link>
              </p>
            ))
          : 'loading...'}
      </div>
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