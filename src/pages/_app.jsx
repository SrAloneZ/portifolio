import Head from 'next/head'
import '@fortawesome/fontawesome-free'

import '../style/main.css'
import '../style/owl/owl.carousel.min.css'
import '../style/owl/owl.theme.default.min.css'
import '../style/magnific-popup.css'
import '../style/buttons-social.css'

export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Component {...pageProps} />
    </>
  )
}
