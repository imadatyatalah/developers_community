import { Box, Button } from "@chakra-ui/react";
import Head from "next/head";
import NextImage from "next/image";
import NextLink from "next/link";

import { MAX_WIDTH } from "../../config";

const Custom404 = () => (
  <>
    <Head>
      <title>Page not found</title>
    </Head>

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
            <a>Back to home page</a>
          </NextLink>
        </Button>
      </Box>
    </Box>
  </>
);

export default Custom404;
