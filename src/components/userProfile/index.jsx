import { Box, Heading, Text } from "@chakra-ui/react";
import NextImage from "next/image";

import { MAX_WIDTH } from "../../../config";
import UserInfo from "./userInfo";
import SocialMediaAccounts from "./socialMediaAccounts";

const UserProfile = (props) => {
  const { profile_image, name, summary, tag_line } = props.data;

  return (
    <>
      <Box bgColor="teal.600" minH="100px"></Box>
      <Box
        as="section"
        maxW={MAX_WIDTH}
        px={[4, 6, 10]}
        mx="auto"
        textAlign="center"
      >
        <Box mt="-50px">
          <NextImage
            src={profile_image}
            width="100"
            height="100"
            alt={name}
            className={props.isOrganization ? "orgImage" : "userImage"}
          />
        </Box>

        <Heading as="h1">{name}</Heading>
        {props.isOrganization && tag_line && <Text py="2">{tag_line}</Text>}
        <Text py="2">{summary ? summary : "404 bio not found"}</Text>

        <Box
          py="2"
          display={{ lg: "flex" }}
          alignItems="center"
          justifyContent="center"
        >
          <UserInfo {...props} />
          <SocialMediaAccounts {...props} />
        </Box>
      </Box>
    </>
  );
};

export default UserProfile;
