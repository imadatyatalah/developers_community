import dynamic from "next/dynamic";
import useSwr from "swr";

const HomePage = dynamic(() => import("../components/pages"));

import config, { BASE_URL, fetcher } from "../../config";
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

      <HomePage articles={articlesData} listings={listingsData} />
    </>
  );
};

export const getServerSideProps = async () => {
  const articles = await getArticles();
  const listings = await getListings();

  return { props: { articles, listings } };
};

export default Home;
