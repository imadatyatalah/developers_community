import { Box, chakra, Text } from "@chakra-ui/react";
import moment from "moment";
import NextImage from "next/image";
import NextLink from "next/link";

import styles from "./css/index.module.css";

const ArticleInfo = ({ data }) => (
  <>
    <Box display="flex" alignItems="center">
      <NextLink href={data.user.username}>
        <chakra.a href={data.user.username} px="5px" pt="5px">
          <NextImage
            src={data.user.profile_image_90}
            width="40"
            height="40"
            priority
            alt={data.user.name}
            className={styles.userImage}
          />
        </chakra.a>
      </NextLink>
      <Box>
        <NextLink href={data.user.username}>
          <chakra.a
            href={data.user.username}
            fontWeight="600"
            opacity="65%"
            transitionDuration="250ms"
            _hover={{ opacity: "100%" }}
          >
            {data.user.name}
          </chakra.a>
        </NextLink>

        <Text fontSize="sm" fontWeight="300">
          {data.readable_publish_date} ({moment(data.published_at).fromNow()})
        </Text>
      </Box>
    </Box>
  </>
);

export default ArticleInfo;
