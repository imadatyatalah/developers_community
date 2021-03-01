import { Text } from "@chakra-ui/react";
import DefaultContainer from "../UI/defaultContainer";

const OrganizationTechStack = ({ data }) => (
  <>
    <DefaultContainer
      my="2"
      minW={{ lg: "350px" }}
      maxW={{ lg: "350px" }}
      isSideComp
    >
      <h2 className="customHeading">Our stack</h2>
      <Text>{data}</Text>
    </DefaultContainer>
  </>
);

export default OrganizationTechStack;
