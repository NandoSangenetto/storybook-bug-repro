import { AppProps } from 'next/app';
import { createGlobalStyle, ThemeProvider } from 'styled-components';
import Head from 'next/head';
import { Reset } from 'styled-reset';

import { theme } from '../constants/theme';

export const GlobalStyle = createGlobalStyle`
  body {
    font-family: 'Open Sans', sans-serif;
    margin: 0;
    padding: 0;
    box-sizing: border-box;   
  }
`;

const App: React.FC<AppProps> = ({ Component, pageProps }): JSX.Element => (
  <>
    <Head>
      <title>Agent Portal</title>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta content="#ffffff" name="theme-color" />
      <link
        href="/favicon-32x32.png"
        rel="icon"
        sizes="32x32"
        type="image/png"
      />
      <link
        href="/favicon-16x16.png"
        rel="icon"
        sizes="16x16"
        type="image/png"
      />
      <link
        href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;600;700&amp;display=swap"
        rel="stylesheet"
      />
    </Head>
    <Reset />
    <GlobalStyle />
    <ThemeProvider theme={theme}>
      {/* eslint-disable-next-line react/jsx-props-no-spreading */}
      <Component {...pageProps} />
    </ThemeProvider>
  </>
);

export default App;
