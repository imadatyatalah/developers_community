import { getArticles } from "../lib/articles";
import { getListings } from "../lib/listings";
import SEO from "../components/seo";
import HomePage from "../components/pages";

const Home = ({ articles, listings }) => {
  return (
    <>
      <SEO title="Home" />

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
