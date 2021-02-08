import { Box, chakra, Divider } from "@chakra-ui/react";
import NextLink from "next/link";

import SideBarContainer from "../UI/sideBarContainer";
import ListingsHeader from "./listingsHeader";

const Listing = ({ data }) => (
  <>
    <SideBarContainer>
      <ListingsHeader />

      <Box pt="2">
        {data.map((item) => (
          <Box py="1" key={item.id}>
            <Divider />
            <Box>
              <NextLink href={`/listings/${item.category}/${item.slug}`}>
                <chakra.a
                  href={`/listings/${item.category}/${item.slug}`}
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
        ))}
      </Box>
    </SideBarContainer>
  </>
);

export default Listing;
