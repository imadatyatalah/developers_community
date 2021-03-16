import { Box } from "@chakra-ui/react"

const DefaultContainer = ({ children, isSideComp, ...props }) => (
  <>
    <Box
      as="section"
      minW={{ lg: isSideComp && "380px" }}
      maxW={{ lg: isSideComp && "380px" }}
      py={isSideComp && "2"}
      px={isSideComp && "4"}
      ml={{ lg: isSideComp && "4" }}
      bgColor="gray.50"
      rounded="md"
      border="1px"
      borderColor="gray.300"
      _hover={{ borderColor: "teal.400" }}
      {...props}
    >
      {children}
    </Box>
  </>
)

export default DefaultContainer
