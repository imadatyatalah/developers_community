import { Box } from "@chakra-ui/react"

import ArticleHeader from "./articleHeader"

const ArticleBody = (props) => {
  const { data } = props

  return (
    <>
      <Box my="2" rounded="md" bgColor="gray.50">
        <Box as="article" py="2">
          <ArticleHeader {...props} />
          <Box dangerouslySetInnerHTML={{ __html: data.body_html }} />
        </Box>
      </Box>
    </>
  )
}

export default ArticleBody
