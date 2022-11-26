import type { NextPageWithLayout } from '../_app'
import React from 'react'
import Link from 'next/link'
import fetch from '../../libs/fetch'
import Layout from '../../components/layout'
import Header from '../../components/header'
import Footer from '../../components/footer'

import useSWR from 'swr'

const Repo: NextPageWithLayout = () => {
  const id =
    typeof window !== 'undefined' ? window.location.pathname.slice(1) : ''
  const { data } = useSWR<{
    forks_count: number
    stargazers_count: number
    watchers: number
  }>('/api/data?id=' + id, fetch)

  return (
    <div className='bg-black text-white flex flex-col flex-1'>
      <h1>{id}</h1>
      {data ? (
        <div>
          <p>forks: {data.forks_count}</p>
          <p>stars: {data.stargazers_count}</p>
          <p>watchers: {data.watchers}</p>
        </div>
      ) : (
        'loading...'
      )}
      <br />
      <br />
      <Link href="/">
        Back
      </Link>
    </div>
  )
}

export default Repo

Repo.getLayout = function getLayout(page: React.ReactElement) {
  return (
    <Layout>
      <Header />
      {page}
      <Footer />
    </Layout>
  )
}