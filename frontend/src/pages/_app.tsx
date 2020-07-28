import type { AppProps /*, AppContext */ } from 'next/app';
import Head from 'next/head';

import GlobalStyles from 'styles/Global';

function App({ Component, pageProps }: AppProps) {
  return (
    //substitui div vazia
    <>
      <Component {...pageProps} />;
      <Head>
        <title>Won Games</title>
        <link rel="shortcut icon" href="/img/icon-512.png" />
        <link rel="apple-touch-icon" href="/img/icon-512.png" />
        <meta
          name="description"
          content="A simple project starter to work with TypeScript, React, NextJS and Styled Components"
        />
      </Head>
      <GlobalStyles />
    </>
  );
}

export default App;