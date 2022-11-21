
import Link from 'next/link'
import type { InferGetStaticPropsType } from 'next'
import type { Repository } from '../types/github'


export async function getStaticProps() {
  const res = await fetch('https://api.github.com/repos/milsman2/kane-bros-lab')
  const data: Repository = await res.json()
  return {
    props: {
      stars: data.stargazers_count,
    },
  }
}

export default function Home({
  stars,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <div className='bg-black text-white min-h-screen flex flex-col flex-1'>
        <nav className='flex justify-between flex-wrap content-center bg-amber-800 p-4 sticky top-0'>
          <div className='flex items-center text-white mr-6'>
            <span className="font-semibold text-xl tracking-tight">Kane Bros. Lab</span>
          </div>
        </nav>
        <h2 className='flex flex-col flex-1 items-center justify-center text-lg text-gray-400'>
          Kane Bros. Lab landing page has {stars} ⭐️ on Github.
        </h2>
        <footer className='flex flex-wrap justify-center items-center p-4 bg-black mt-auto text-white'>
          <a className='text-white ml-5' href='https://blog.kanebroslab.com'>Brought to you by Kane Bros. Lab</a>
        </footer>
    </div>
  )
}