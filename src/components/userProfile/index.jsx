import { Box, Heading, Text } from "@chakra-ui/react";
import NextImage from "next/image";

import SocialMediaAccounts from "./socialMediaAccounts";
import UserInfo from "./userInfo";

import styles from "./css/index.module.css";

const UserProfile = (props) => {
  const { profile_image, name, summary } = props.data;

  return (
    <>
      <Box bgColor="teal.600" minH="15vh"></Box>
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
            className={styles.userImage}
          />
        </Box>

        <Heading as="h1">{name}</Heading>
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
