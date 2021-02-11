import { Box, chakra, List, ListItem, Text } from "@chakra-ui/react";
import NextImage from "next/image";
import NextLink from "next/link";

import styles from "./css/index.module.css";

const Item = ({ title, data }) => (
  <>
    {data && (
      <ListItem textColor="gray.600">
        <Text as="span" fontWeight="500" textColor="gray.700">
          {title}
        </Text>
        {data}
      </ListItem>
    )}
  </>
);

const UserInfo = ({ data }) => (
  <>
    <Box mt="-35px">
      <NextLink href={`/${data.username}`}>
        <chakra.a href={`/${data.username}`}>
          <NextImage
            src={data.profile_image}
            width="60"
            height="60"
            alt={data.name}
            priority
            className={styles.userImage}
          />
        </chakra.a>
      </NextLink>
    </Box>

    <NextLink href={`/${data.username}`}>
      <chakra.a href={`/${data.username}`} fontSize="lg" fontWeight="600">
        {data.name}
      </chakra.a>
    </NextLink>

    <Text py="2" textColor="gray.600">
      {data.summary}
    </Text>

    <List>
      <Item title="Location: " data={data.location} />
      <Item title="Joined: " data={data.joined_at} />
    </List>
  </>
);

export default UserInfo;
