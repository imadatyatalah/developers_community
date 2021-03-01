import { Box } from "@chakra-ui/react";
import NextImage from "next/image";

import ArticleTags from "../article/articleTags";
import ArticleInfo from "../article/articleInfo";
import OrganizationProfile from "./organizationProfile";

const ArticleHeader = (props) => {
  const { data } = props;

  return (
    <>
      <Box as="header">
        {data.cover_image && (
          <NextImage
            src={data.cover_image}
            width="1000"
            height="420"
            alt={data.title}
            className="articleCoverImage"
          />
        )}

        <Box>
          {props.isOrganizationArticle && <OrganizationProfile data={data} />}

          <h1
            style={{
              fontSize: "1.875rem",
              fontWeight: "700",
              paddingTop: "0.5rem",
              lineHeight: "1.33",
            }}
          >
            {data.title}
          </h1>

          <Box py="2">
            <ArticleTags data={data.tags} />
          </Box>

          <ArticleInfo {...props} />
        </Box>
      </Box>
    </>
  );
};

export default ArticleHeader;
