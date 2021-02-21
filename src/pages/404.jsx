import { Box, Button, chakra } from "@chakra-ui/react";
import NextImage from "next/image";
import NextLink from "next/link";

import { MAX_WIDTH } from "../../config";

const Custom404 = () => (
  <>
    <Box
      as="section"
      d="flex"
      flexDir="column"
      justifyContent="center"
      alignItems="center"
      maxW={MAX_WIDTH}
      px={[4, 6, 8]}
      mx="auto"
    >
      <NextImage
        src="/404-error-bro.png"
        width="600"
        height="600"
        alt="404 error page"
      />
      <Box py="4">
        <Button colorScheme="telegram" fontWeight="700">
          <NextLink href="/">
            <chakra.a href="/">Back to home page</chakra.a>
          </NextLink>
        </Button>
      </Box>
    </Box>
  </>
);

export default Custom404;
