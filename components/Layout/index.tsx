import Head from 'next/head';
import Footer from './../Footer';
import Header from './../Header';

type LayoutProps = {
  children: React.ReactNode;
};

export default function Layout({ children }: LayoutProps) {
  return (
    <>
      <div className="flex flex-col flex-1 h-screen overflow-hidden">
        <Head>
          <title>Incubated by EaDo Technologies.</title>
          <link rel="shortcut icon" href="/favicon.ico" />
          <meta
            name="description"
            content="Kane Bros. Lab is an incubation effort backed by EaDo Technologies."
            key="desc"
          />
        </Head>
        <Header />
        <main className="flex flex-col flex-1 overflow-y-scroll">
          {children}
        </main>
        <Footer />
      </div>
    </>
  );
}
