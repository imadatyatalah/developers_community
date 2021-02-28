import { ChakraProvider, extendTheme } from "@chakra-ui/react";

import Layout from "../components/layout";

import "@fontsource/poppins/latin-300.css";
import "@fontsource/poppins/latin-400.css";
import "@fontsource/poppins/latin-500.css";
import "@fontsource/poppins/latin-600.css";
import "@fontsource/poppins/latin-700.css";
import "../styles/index.css";

const theme = extendTheme({
  fonts: {
    heading: "Poppins, -apple-system",
    body: "Poppins, -apple-system",
  },
});

const MyApp = ({ Component, pageProps }) => (
  <>
    <ChakraProvider theme={theme}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ChakraProvider>
  </>
);

export default MyApp;
