import { Box } from "@chakra-ui/react";

import ArticleHeader from "./articleHeader";

const ArticleBody = (props) => {
  const { data } = props;

  return (
    <>
      <Box>
        <ArticleHeader {...props} />
        <Box
          as="article"
          py="2"
          overflow="hidden"
          dangerouslySetInnerHTML={{ __html: data.body_html }}
        />
      </Box>
    </>
  );
};

export default ArticleBody;
