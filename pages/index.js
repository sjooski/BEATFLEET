import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Beat Fleet</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="Beat Fleet" />
        <p className="description">
          Welcome to the Beat Fleet distro site.
        </p>
      </main>

      <Footer />
    </div>
  )
}
