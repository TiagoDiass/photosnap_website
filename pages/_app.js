import { ThemeProvider } from 'styled-components';
import { Header } from '../components';
import GlobalStyle from '../styles/global';
import theme from '../styles/theme';

export default function App({ Component, pageProps }) {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Header />
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}
