import { Box, chakra, Heading, Text } from "@chakra-ui/react";
import NextLink from "next/link";

const Error = ({ statusCode, title }) => (
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
        <Text fontSize="lg">{title}</Text>
      </Box>

      <NextLink href="/">
        <chakra.a
          href="/"
          fontSize={{ base: "xl", sm: "2xl" }}
          fontWeight="700"
          transitionDuration="250ms"
          _hover={{ color: "teal.400" }}
        >
          Back to home page
        </chakra.a>
      </NextLink>
    </Box>
  </>
);

Error.getInitialProps = ({ res, err }) => {
  const statusCode = res ? res.statusCode : err ? err.statusCode : 404;

  return { statusCode };
};

export default Error;
