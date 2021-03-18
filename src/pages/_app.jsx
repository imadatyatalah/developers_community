import { useRef } from "react"
import { Hydrate } from "react-query/hydration"
import { ReactQueryDevtools } from "react-query/devtools"
import { QueryClientProvider, QueryClient } from "react-query"
import { ChakraProvider, extendTheme } from "@chakra-ui/react"
import { DefaultSeo } from "next-seo"

import Layout from "../components/layout"
import SEO from "../../next-seo.config"

import "@fontsource/poppins/latin-300.css"
import "@fontsource/poppins/latin-400.css"
import "@fontsource/poppins/latin-500.css"
import "@fontsource/poppins/latin-600.css"
import "@fontsource/poppins/latin-700.css"
import "../styles/index.css"

const theme = extendTheme({
  fonts: {
    heading: "Poppins, -apple-system",
    body: "Poppins, -apple-system",
  },
})

const MyApp = ({ Component, pageProps }) => {
  const queryClientRef = useRef()

  if (!queryClientRef.current) {
    queryClientRef.current = new QueryClient()
  }

  return (
    <>
      <DefaultSeo {...SEO} />

      <QueryClientProvider client={queryClientRef.current}>
        <Hydrate state={pageProps.dehydratedState}>
          <ChakraProvider theme={theme}>
            <Layout>
              <Component {...pageProps} />
            </Layout>
          </ChakraProvider>
        </Hydrate>
        <ReactQueryDevtools />
      </QueryClientProvider>
    </>
  )
}

export default MyApp
