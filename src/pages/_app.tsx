import type { AppProps } from 'next/app'
import Head from 'next/head'
import AlternativeLocales from '../utils/AlternativeLocales'
import 'styles/global.css'
import 'styles/fonts.css'

const App = ({ Component, pageProps }: AppProps) => (
  <>
    <Head>
      <title>Tymoteusz Czech &ndash; www.tymek.cz</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <AlternativeLocales />
    <Component {...pageProps} />
  </>
)

export default App
