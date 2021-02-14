import { Box } from "@chakra-ui/react";

import DefaultContainer from "../UI/defaultContainer";
import UserInfo from "./userInfo";

const UserArticle = (props) => (
  <>
    <DefaultContainer
      my="2"
      minW={{ lg: "350px" }}
      maxW={{ lg: "350px" }}
      isSideComp
    >
      <Box bgColor="teal.600" minH="60px" roundedTop="md"></Box>

      <Box px="4" mx="auto">
        <UserInfo {...props} />
      </Box>
    </DefaultContainer>
  </>
);

export default UserArticle;
