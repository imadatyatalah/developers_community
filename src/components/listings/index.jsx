import { Box, chakra, Divider, Heading } from "@chakra-ui/react"
import NextLink from "next/link"

import DefaultContainer from "../UI/defaultContainer"

const Listing = ({ data }) => (
  <>
    <DefaultContainer isSideComp>
      <Box
        as="header"
        d="flex"
        justifyContent="space-between"
        alignItems="center"
      >
        <Heading fontSize="2xl" fontWeight="600">
          Listings
        </Heading>

        <NextLink href="/listings" passHref>
          <chakra.a
            opacity="65%"
            transitionDuration="250ms"
            _hover={{ opacity: "100%" }}
          >
            See All
          </chakra.a>
        </NextLink>
      </Box>

      <Box pt="2">
        {data.map((item) => (
          <Box py="1" key={item.id}>
            <Divider />
            <Box>
              <NextLink
                href={`/listings/${item.category}/${item.slug}`}
                passHref
              >
                <chakra.a
                  fontWeight="500"
                  transitionDuration="250ms"
                  _hover={{ color: "teal.400" }}
                >
                  {item.title}
                </chakra.a>
              </NextLink>
            </Box>

            <Box>
              <NextLink href={`/listings/${item.category}`} passHref>
                <chakra.a
                  opacity="65%"
                  transitionDuration="250ms"
                  _hover={{ opacity: "100%" }}
                >
                  {item.category}
                </chakra.a>
              </NextLink>
            </Box>
          </Box>
        ))}
      </Box>
    </DefaultContainer>
  </>
)

export default Listing
