import { Box, Heading } from "@chakra-ui/react";

const Error = ({ statusCode }) => (
  <Box minH="100vh" display="flex" justifyContent="center" alignItems="center">
    <Heading as="h1">
      {statusCode
        ? `An error ${statusCode} occurred on server`
        : "An error occurred on client"}
    </Heading>
  </Box>
);

Error.getInitialProps = ({ res, err }) => {
  const statusCode = res ? res.statusCode : err ? err.statusCode : 404;
  return { statusCode };
};

export default Error;
