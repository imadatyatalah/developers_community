import { Box, Heading, chakra } from "@chakra-ui/react";
import NextLink from "next/link";

import ArticleActions from "./articleActions";
import ArticleInfo from "./articleInfo";
import ArticleTags from "./articleTags";

const Article = ({ data, userData, isProfile, isUser }) => (
  <>
    <Box as="section" py="2" w="100%">
      {data != "" && (
        <Heading size="lg" fontWeight="600">
          {isProfile && userData.name} Posts
        </Heading>
      )}

      {data.map((article) => (
        <Box
          my="3"
          bg="gray.50"
          rounded="md"
          border="1px"
          borderColor="gray.300"
          _hover={{ borderColor: "teal.400" }}
          key={article.id}
        >
          <ArticleInfo data={article} isUser={isUser} />

          <Box px={{ base: "5px", md: "50px" }}>
            <NextLink href={article.path}>
              <chakra.a
                href={article.path}
                fontSize="2xl"
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
        </Box>
      ))}
    </Box>
  </>
);

export default Article;
