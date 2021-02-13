import { Box, Text } from "@chakra-ui/react";
import moment from "moment";
import ProfileImg from "./profileImg";
import UserName from "./userName";

const ArticleInfo = (props) => {
  const { data } = props;

  return (
    <>
      <Box as="header" display="flex" alignItems="center">
        <ProfileImg {...props} />

        <Box>
          <UserName {...props} />

          <Text fontSize="sm" fontWeight="300">
            {data.readable_publish_date} ({moment(data.published_at).fromNow()})
          </Text>
        </Box>
      </Box>
    </>
  );
};

export default ArticleInfo;
