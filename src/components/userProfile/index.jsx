import { Box, Heading, Text } from "@chakra-ui/react";
import NextImage from "next/image";

import SocialMediaAccounts from "./socialMediaAccounts";
import UserInfo from "./userInfo";

import styles from "./css/index.module.css";

const UserProfile = (props) => {
  const { profile_image, name, summary, tag_line } = props.data;

  return (
    <>
      <Box bgColor="teal.600" minH="100px"></Box>
      <Box
        as="section"
        px={[4, 6, 10]}
        mx="auto"
        minH="50vh"
        textAlign="center"
      >
        <Box mt="-50px">
          <NextImage
            src={profile_image}
            width="100"
            height="100"
            alt={name}
            priority
            className={
              props.isOrganization ? styles.orgImage : styles.userImage
            }
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
