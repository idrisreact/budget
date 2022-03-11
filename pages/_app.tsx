import type { AppProps } from "next/app";
import { ThemeProvider, createGlobalStyle } from "styled-components";
import { theme } from "../styles/theme";
import { GlobalStyle } from "../styles/global";
import Header from "../src/components/Header/Header";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Header>
        <Component {...pageProps} />
      </Header>
    </ThemeProvider>
  );
}
export default MyApp;
