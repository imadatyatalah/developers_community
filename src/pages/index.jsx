import dynamic from "next/dynamic";
import useSwr from "swr";

const Article = dynamic(() => import("../components/article"));

import config, { fetcher, BASE_URL } from "../../config";
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
      <Article data={articlesData} />
    </>
  );
};

export const getServerSideProps = async () => {
  const articles = await fetcher(`${BASE_URL}articles`);
  const listings = await fetcher(`${BASE_URL}listings?per_page=5`);

  return { props: { articles, listings } };
};

export default Home;
