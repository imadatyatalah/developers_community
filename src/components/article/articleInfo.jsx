import { Box } from "@chakra-ui/react";
import dynamic from "next/dynamic";

const PublishDate = dynamic(() => import("./publishDate"));

import ProfileImg from "./profileImg";
import UserName from "./userName";

const ArticleInfo = (props) => {
  return (
    <>
      <Box as="header" display="flex" alignItems="center">
        <ProfileImg {...props} />

        <Box>
          <UserName {...props} />

          <PublishDate {...props} />
        </Box>
      </Box>
    </>
  );
};

export default ArticleInfo;
