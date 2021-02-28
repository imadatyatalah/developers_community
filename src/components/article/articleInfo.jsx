import { Box, Text } from "@chakra-ui/react";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";

import ProfileImg from "./profileImg";
import UserName from "./userName";

dayjs.extend(relativeTime);

const ArticleInfo = (props) => {
  const { data } = props;

  return (
    <>
      <Box as="header" display="flex" alignItems="center">
        <ProfileImg {...props} />

        <Box>
          <UserName {...props} />

          <Text fontSize="sm" fontWeight="300">
            {data.readable_publish_date} ({dayjs(data.published_at).fromNow()})
          </Text>
        </Box>
      </Box>
    </>
  );
};

export default ArticleInfo;
