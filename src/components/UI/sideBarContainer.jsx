import { Box } from "@chakra-ui/react";

const SideBarContainer = ({ children }) => (
  <>
    <Box
      as="section"
      minW={{ lg: "380px" }}
      maxW={{ lg: "380px" }}
      bgColor="gray.50"
      py="2"
      px="4"
      ml={{ lg: "4" }}
      rounded="md"
      border="1px"
      borderColor="gray.300"
      _hover={{ borderColor: "teal.400" }}
    >
      {children}
    </Box>
  </>
);

export default SideBarContainer;
