import { Box } from "@chakra-ui/react"
import NextHead from "next/head"

const Layout = ({ children }) => (
  <>
    <NextHead>
      <link rel="shortcut icon" href="/dev-ecosystem.png" type="image/x-icon" />

      <meta httpEquiv="Content-Type" content="text/html;charset=UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    </NextHead>

    <Box as="main" minH="100vh">
      {children}
    </Box>
  </>
)

export default Layout
