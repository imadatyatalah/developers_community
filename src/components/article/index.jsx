import { Box } from "@chakra-ui/react"
import NextLink from "next/link"

import DefaultContainer from "../UI/defaultContainer"
import ArticleInfo from "./articleInfo"
import ArticleTags from "./articleTags"
import ArticleActions from "./articleActions"

const Article = ({ data, userData, isProfile, isUser }) => (
  <>
    <Box py="2" w="100%">
      {data != "" && (
        <h2 className="customHeading">{isProfile && userData.name} Posts</h2>
      )}

      {data.map((article) => (
        <DefaultContainer my="3" key={article.id}>
          <ArticleInfo data={article} isUser={isUser} />

          <Box px={{ base: "5px", md: "50px" }}>
            <NextLink href={article.path}>
              <a className="bigTitle">{article.title}</a>
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
)

export default Article
