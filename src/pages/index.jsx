import dynamic from "next/dynamic";

const HomePage = dynamic(() => import("../components/pages"));

import { getArticles } from "../lib/articles";
import { getListings } from "../lib/listings";
import SEO from "../components/seo";
import config from "../../config";

const Home = ({ articles, listings }) => {
  return (
    <>
      <SEO title="Home" description={config.description} />

      <HomePage articles={articles} listings={listings} />
    </>
  );
};

export const getServerSideProps = async () => {
  const articles = await getArticles();
  const listings = await getListings(4);

  return { props: { articles, listings } };
};

export default Home;
