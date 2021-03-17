import { chakra } from "@chakra-ui/react"
import NextLink from "next/link"

const ArticleTags = ({ data }) => (
  <>
    {data.map((tag) => (
      <NextLink href={`/tag/${tag}`} key={tag} passHref>
        <chakra.a
          opacity="65%"
          transitionDuration="250ms"
          _hover={{ opacity: "100%" }}
        >
          #{tag}{" "}
        </chakra.a>
      </NextLink>
    ))}
  </>
)

export default ArticleTags
