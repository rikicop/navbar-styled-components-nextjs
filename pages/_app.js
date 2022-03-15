import { createGlobalStyle, ThemeProvider } from "styled-components";
import Layout from "../components/Layout";

const GlobalStyle = createGlobalStyle`
  * {
    font-family: 'Epilogue';
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    
  }
`;

const theme = {
  colors: {
    primary: "#0070f3",
  },
};

export default function App({ Component, pageProps }) {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ThemeProvider>
    </>
  );
}
