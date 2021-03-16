import { Box } from "@chakra-ui/react"
import NextLink from "next/link"

const ListingsHeader = () => (
  <>
    <Box
      as="header"
      d="flex"
      justifyContent="space-between"
      alignItems="center"
    >
      <h2 className="customHeading">Listings</h2>

      <NextLink href="/listings">
        <a className="tag">See All</a>
      </NextLink>
    </Box>
  </>
)

export default ListingsHeader
