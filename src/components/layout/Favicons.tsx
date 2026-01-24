import React from 'react'

/**
 * Shared favicon + PWA icon links.
 * Use inside `<Head>` (from `next/head` or `next/document`).
 */
export function Favicons(): JSX.Element {
  return (
    <>
      <link rel="icon" href="/icons/favicon/favicon.ico" sizes="any" />
      <link rel="icon" type="image/svg+xml" href="/icons/favicon/favicon.svg" />
      <link rel="icon" type="image/png" sizes="32x32" href="/icons/favicon/favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/icons/favicon/favicon-16x16.png" />
      <link rel="apple-touch-icon" sizes="180x180" href="/icons/favicon/apple-touch-icon.png" />
      <link rel="manifest" href="/site.webmanifest" />
    </>
  )
}

