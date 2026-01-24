import { Html, Head, Main, NextScript } from 'next/document'
import { Favicons } from '../src/components/layout/Favicons'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta charSet="utf-8" />
        <meta name="google-site-verification" content="div7rYz0HLsnnDAzySJpmtg_KVXUgRN527q-05CdVnY" />
        <Favicons />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
