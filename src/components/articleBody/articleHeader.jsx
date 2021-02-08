import { Box, Heading } from "@chakra-ui/react";
import NextImage from "next/image";

import ArticleTags from "../article/articleTags";
import ArticleInfo from "../article/articleInfo";

import styles from "./css/index.module.css";

const ArticleHeader = (props) => {
  const { data } = props;

  return (
    <>
      {data.cover_image && (
        <NextImage
          src={data.cover_image}
          width="1000"
          height="420"
          alt={data.title}
          priority
          className={styles.articleCoverImage}
        />
      )}
      <Box>
        <Heading as="h1" pt="2">
          {data.title}
        </Heading>

        <Box py="2">
          <ArticleTags data={data.tags} />
        </Box>

        <ArticleInfo {...props} />
      </Box>
    </>
  );
};

export default ArticleHeader;
