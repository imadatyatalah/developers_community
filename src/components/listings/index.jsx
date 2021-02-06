import { Box, chakra, Divider } from "@chakra-ui/react";
import NextLink from "next/link";

import ListingsHeader from "./listingsHeader";

const Container = ({ children }) => (
  <>
    <Box
      display={{ base: "none", lg: "block" }}
      w="30rem"
      bgColor="gray.50"
      py="2"
      px="4"
      ml="4"
      rounded="md"
      border="1px"
      borderColor="gray.300"
      _hover={{ borderColor: "teal.400" }}
    >
      {children}
    </Box>
  </>
);

const Listing = ({ data }) => (
  <>
    <Container>
      <ListingsHeader />

      <Box pt="2">
        {data.map((item) => (
          <>
            <Box py="1">
              <Divider />
              <Box>
                <NextLink href={`/listings/${item.category}/${item.slug}`}>
                  <chakra.a
                    href={`/listings/${item.category}/${item.slug}`}
                    fontSize="md"
                    fontWeight="500"
                    transitionDuration="250ms"
                    _hover={{ color: "teal.400" }}
                  >
                    {item.title}
                  </chakra.a>
                </NextLink>
              </Box>

              <Box>
                <NextLink href={`/listings/${item.category}`}>
                  <chakra.a
                    href={`/listings/${item.category}`}
                    opacity="65%"
                    transitionDuration="250ms"
                    _hover={{ opacity: "100%" }}
                  >
                    {item.category}
                  </chakra.a>
                </NextLink>
              </Box>
            </Box>
          </>
        ))}
      </Box>
    </Container>
  </>
);

export default Listing;
