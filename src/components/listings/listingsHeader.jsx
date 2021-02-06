import { Box, Heading, chakra } from "@chakra-ui/react";
import NextLink from "next/link";

const ListingsHeader = () => (
  <>
    <Box
      as="header"
      d="flex"
      justifyContent="space-between"
      alignItems="center"
    >
      <Heading size="lg" fontWeight="600">
        Listing
      </Heading>

      <NextLink href="/listings">
        <chakra.a
          href="/listings"
          opacity="65%"
          transitionDuration="250ms"
          _hover={{ opacity: "100%" }}
        >
          See All
        </chakra.a>
      </NextLink>
    </Box>
  </>
);

export default ListingsHeader;
