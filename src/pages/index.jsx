import { Box } from "@chakra-ui/react"
import { NextSeo } from "next-seo"
import useSwr from "swr"

import config, { BASE_URL, fetcher, MAX_WIDTH } from "../../config"
import { getArticles } from "../lib/articles"
import { getListings } from "../lib/listings"
import Article from "../components/article"
import Listings from "../components/listings"

const Home = ({ articles, listings }) => {
  const title = `Home | ${config.title}`
  const description = config.description
  const url = config.canonical

  const { data: articlesData } = useSwr(
    `${BASE_URL}articles?per_page=20`,
    fetcher,
    {
      initialData: articles,
    }
  )

  const { data: listingsData } = useSwr(
    `${BASE_URL}listings?per_page=4`,
    fetcher,
    {
      initialData: listings,
    }
  )

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
        <Article data={articlesData} isUser={!articlesData.organization} />
        <Listings data={listingsData} />
      </Box>
    </>
  )
}

export const getServerSideProps = async () => {
  return {
    props: {
      articles: await getArticles(20),
      listings: await getListings(4),
    },
  }
}

export default Home
