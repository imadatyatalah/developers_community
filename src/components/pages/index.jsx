import { Box } from "@chakra-ui/react";
import useSwr from "swr";

import { BASE_URL, fetcher } from "../../../config";
import Article from "../article";
import Listings from "../listings";

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
