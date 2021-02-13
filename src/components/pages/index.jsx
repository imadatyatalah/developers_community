import { Box } from "@chakra-ui/react";
import dynamic from "next/dynamic";
import useSwr from "swr";

const Article = dynamic(() => import("../article"));
const Listings = dynamic(() => import("../listings"));

import { BASE_URL, fetcher } from "../../../config";

const HomePage = ({ articles, listings }) => {
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

export default HomePage;
