import { Box } from "@chakra-ui/react";
import dynamic from "next/dynamic";
import useSwr from "swr";

const Article = dynamic(() => import("../components/article"));
const Listings = dynamic(() => import("../components/listings"));

import config, { fetcher, BASE_URL } from "../../config";
import { getArticles } from "../lib/articles";
import { getListings } from "../lib/listings";
import SEO from "../components/seo";

const Home = ({ articles, listings }) => {
  const { data: articlesData } = useSwr(`${BASE_URL}articles`, fetcher, {
    initialData: articles,
  });

  const { data: listingsData } = useSwr(
    `${BASE_URL}listings?per_page=5`,
    fetcher,
    {
      initialData: listings,
    }
  );

  return (
    <>
      <SEO title="Home" description={config.description} />
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
  const listings = await getListings();

  return { props: { articles, listings } };
};

export default Home;
