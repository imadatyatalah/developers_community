import { Box, Button, chakra, Heading } from "@chakra-ui/react";
import NextLink from "next/link";

const Error = ({ statusCode }) => (
  <>
    <Box
      as="section"
      d="flex"
      justifyContent="center"
      alignItems="center"
      flexDir="column"
      textAlign="center"
      minH="100vh"
      p="5"
    >
      <Box py="4">
        <Heading as="h1">
          {statusCode
            ? `An error ${statusCode} occurred on server`
            : "An error occurred on client"}
        </Heading>
      </Box>

      <Button colorScheme="telegram" fontWeight="700">
        <NextLink href="/">
          <chakra.a href="/">Back to home page</chakra.a>
        </NextLink>
      </Button>
    </Box>
  </>
);

Error.getInitialProps = ({ res, err }) => {
  const statusCode = res ? res.statusCode : err ? err.statusCode : 404;

  return { statusCode };
};

export default Error;
