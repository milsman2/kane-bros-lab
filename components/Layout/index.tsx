import Head from 'next/head';
import { Footer } from './../Footer';
import { Header } from './../Header';

type LayoutProps = {
  children: React.ReactNode;
};

export function Layout({ children }: LayoutProps) {
  return (
    <>
      <div className="flex flex-col flex-1 h-screen w-full overflow-hidden">
        <Head>
          <title>A Homelab Landing Page</title>
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
