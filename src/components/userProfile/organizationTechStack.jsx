import { Heading, Text } from "@chakra-ui/react";
import DefaultContainer from "../UI/defaultContainer";

const OrganizationTechStack = ({ data }) => (
  <>
    <DefaultContainer
      my="2"
      minW={{ lg: "350px" }}
      maxW={{ lg: "350px" }}
      isSideComp
    >
      <Heading size="lg" fontWeight="600">
        Our stack
      </Heading>
      <Text>{data}</Text>
    </DefaultContainer>
  </>
);

export default OrganizationTechStack;
