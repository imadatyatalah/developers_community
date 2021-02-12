import { Heading, Text } from "@chakra-ui/react";
import SideBarContainer from "../UI/sideBarContainer";

const OrganizationTechStack = ({ data }) => (
  <>
    <SideBarContainer my="2" minW={{ lg: "350px" }} maxW={{ lg: "350px" }}>
      <Heading size="lg" fontWeight="600">
        Our stack
      </Heading>
      <Text>{data}</Text>
    </SideBarContainer>
  </>
);

export default OrganizationTechStack;
