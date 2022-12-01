import Head from 'next/head'
import Footer from './../Footer'
import Header from './../Header'

type LayoutProps = {
  children: React.ReactNode
}

export default function Layout({ children }: LayoutProps) {
  return (
    <>
      <div className='min-h-screen flex flex-col'>
        <Head>
          <title>Layouts Example</title>
        </Head>
        <Header />
        <main className='flex flex-col flex-1'>{children}</main>
        <Footer />
      </div>
    </>
  )
}