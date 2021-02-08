import { Box } from "@chakra-ui/react";

import SideBarContainer from "../UI/sideBarContainer";
import UserInfo from "./userInfo";

const UserArticle = (props) => (
  <>
    <SideBarContainer>
      <Box bgColor="teal.600" minH="60px" roundedTop="md"></Box>

      <Box as="section" px="4" mx="auto">
        <UserInfo {...props} />
      </Box>
    </SideBarContainer>
  </>
);

export default UserArticle;
