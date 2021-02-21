import { Box } from "@chakra-ui/react";
import useSwr from "swr";

import { BASE_URL, fetcher } from "../../config";
import { getArticles } from "../lib/articles";
import { getListings } from "../lib/listings";
import SEO from "../components/seo";
import Article from "../components/article";
import Listings from "../components/listings";

const Home = ({ articles, listings }) => {
  const { data: articlesData } = useSwr(`${BASE_URL}articles`, fetcher, {
    initialData: articles,
  });

  const { data: listingsData } = useSwr(
    `${BASE_URL}listings?per_page=4`,
    fetcher,
    {
      initialData: listings,
    }
  );

  return (
    <>
      <SEO title="Home" />

      <Box
        display="flex"
        flexDir={{ base: "column-reverse", lg: "row" }}
        alignItems={{ lg: "start" }}
        px={[4, 6, 8]}
        mx="auto"
      >
        <Article data={articlesData} isUser={!articlesData.organization} />
        <Listings data={listingsData} />
      </Box>
    </>
  );
};

export const getServerSideProps = async () => {
  const articles = await getArticles();
  const listings = await getListings(4);

  return { props: { articles, listings } };
};

export default Home;
