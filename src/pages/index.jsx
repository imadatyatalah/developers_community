import dynamic from "next/dynamic";
import useSwr from "swr";

const Article = dynamic(() => import("../components/article"));

import config, { fetcher, BASE_URL } from "../../config";
import SEO from "../components/seo";

const Home = ({ articles }) => {
  const { data } = useSwr(`${BASE_URL}articles`, fetcher, {
    initialData: articles,
  });

  return (
    <>
      <SEO title="Home" description={config.description} />
      <Article data={data} />
    </>
  );
};

export const getServerSideProps = async () => {
  const articles = await fetcher(`${BASE_URL}articles`);

  return { props: { articles } };
};

export default Home;
