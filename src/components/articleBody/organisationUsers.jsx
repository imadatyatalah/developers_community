import { Box, chakra, Heading } from "@chakra-ui/react";
import NextLink from "next/link";
import NextImage from "next/image";

import SideBarContainer from "../UI/sideBarContainer";

import styles from "./css/index.module.css";

const OrganisationUsers = ({ data }) => (
  <>
    <SideBarContainer my="2" minW={{ lg: "350px" }} maxW={{ lg: "350px" }}>
      <Heading size="lg" fontWeight="600">
        Meet the team
      </Heading>

      <Box pt="2">
        {data.map((user) => (
          <NextLink href={user.username} key={user.username}>
            <chakra.a href={user.username} p="4px">
              <NextImage
                src={user.profile_image}
                width="40"
                height="40"
                alt={user.name}
                title={user.name}
                priority
                className={styles.userImage}
              />
            </chakra.a>
          </NextLink>
        ))}
      </Box>
    </SideBarContainer>
  </>
);

export default OrganisationUsers;
