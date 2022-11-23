import Head from 'next/head'

type LayoutProps = {
  children: React.ReactNode
}

export default function Layout({ children }: LayoutProps) {
  return (
    <>
      <Head>
        <title>Layouts Example</title>
      </Head>
      <main className='min-h-screen flex flex-col'>{children}</main>
    </>
  )
}