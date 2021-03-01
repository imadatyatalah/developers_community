import { Box, Divider } from "@chakra-ui/react";
import NextLink from "next/link";

import DefaultContainer from "../UI/defaultContainer";
import ListingsHeader from "./listingsHeader";

const Listing = ({ data }) => (
  <>
    <DefaultContainer isSideComp>
      <ListingsHeader />

      <Box pt="2">
        {data.map((item) => (
          <Box py="1" key={item.id}>
            <Divider />
            <Box>
              <NextLink href={`/listings/${item.category}/${item.slug}`}>
                <a className="smallTitle">{item.title}</a>
              </NextLink>
            </Box>

            <Box>
              <NextLink href={`/listings/${item.category}`}>
                <a className="tag">{item.category}</a>
              </NextLink>
            </Box>
          </Box>
        ))}
      </Box>
    </DefaultContainer>
  </>
);

export default Listing;
