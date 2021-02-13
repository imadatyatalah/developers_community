import { Box, Heading, chakra } from "@chakra-ui/react";
import NextLink from "next/link";

import DefaultContainer from "../UI/defaultContainer";
import ArticleInfo from "./articleInfo";
import ArticleTags from "./articleTags";
import ArticleActions from "./articleActions";

const Article = ({ data, userData, isProfile, isUser }) => (
  <>
    <Box py="2" w="100%">
      {data != "" && (
        <Heading size="lg" fontWeight="600">
          {isProfile && userData.name} Posts
        </Heading>
      )}

      {data.map((article) => (
        <DefaultContainer my="3" key={article.id}>
          <ArticleInfo data={article} isUser={isUser} />

          <Box px={{ base: "5px", md: "50px" }}>
            <NextLink href={article.path}>
              <chakra.a
                href={article.path}
                fontSize={{ base: "xl", sm: "2xl" }}
                fontWeight="700"
                transitionDuration="250ms"
                _hover={{ color: "teal.400" }}
              >
                {article.title}
              </chakra.a>
            </NextLink>

            <Box>
              <ArticleTags data={article.tag_list} />
            </Box>

            <ArticleActions data={article} />
          </Box>
        </DefaultContainer>
      ))}
    </Box>
  </>
);

export default Article;
