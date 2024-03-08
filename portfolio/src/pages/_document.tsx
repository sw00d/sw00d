import Script from 'next/script';
import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Script strategy="beforeInteractive" id='theme-defaulter'>
        {`
            document.documentElement.classList.add('dark');
        `}
      </Script>
      <Head />
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
