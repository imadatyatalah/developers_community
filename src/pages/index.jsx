import { Box } from "@chakra-ui/react"
import { NextSeo } from "next-seo"
import { QueryClient, useQuery } from "react-query"
import { dehydrate } from "react-query/hydration"

import config, { MAX_WIDTH } from "../../config"
import { getArticles } from "../lib/articles"
import { getListings } from "../lib/listings"
import Article from "../components/article"
import Listings from "../components/listings"

const Home = () => {
  const title = `Home | ${config.title}`
  const description = config.description
  const url = config.canonical

  const { data: articles } = useQuery("articles", () => getArticles(20))
  const { data: listings } = useQuery(["listings", 4], () => getListings(4))

  return (
    <>
      <NextSeo
        title={title}
        description={description}
        canonical={url}
        openGraph={{
          title,
          description,
          url,
        }}
      />

      <Box
        as="section"
        display="flex"
        flexDir={{ base: "column-reverse", lg: "row" }}
        alignItems={{ lg: "start" }}
        maxW={MAX_WIDTH}
        px={[4, 6, 8]}
        mx="auto"
      >
        <Article data={articles} isUser={!articles.organization} />
        <Listings data={listings} />
      </Box>
    </>
  )
}

export const getServerSideProps = async () => {
  const queryClient = new QueryClient()

  await queryClient.prefetchQuery("articles", () => getArticles(20))
  await queryClient.prefetchQuery(["listings", 4], () => getListings(4))

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  }
}

export default Home
