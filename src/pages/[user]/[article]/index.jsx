import { useRouter } from "next/router";
import { Box } from "@chakra-ui/react";
import dynamic from "next/dynamic";
import useSwr from "swr";

const ErrorPage = dynamic(() => import("next/error"));
const ArticleBody = dynamic(() => import("../../../components/articleBody"));
const UserArticle = dynamic(() =>
  import("../../../components/articleBody/userArticle")
);

import { BASE_URL, fetcher } from "../../../../config";
import SEO from "../../../components/seo";

const Article = ({ userArticle, userData, errorCode }) => {
  const router = useRouter();
  const { user, article } = router.query;

  const { data: articleData } = useSwr(
    `${BASE_URL}/articles/${user}/${article}`,
    fetcher,
    {
      initialData: userArticle,
    }
  );

  const { data: articleUserData } = useSwr(
    `${BASE_URL}users/by_username?url=${user}`,
    fetcher,
    {
      initialData: userData,
    }
  );

  if (errorCode) {
    return <ErrorPage statusCode={errorCode.status} title={errorCode.error} />;
  }

  return (
    <>
      <SEO
        title={articleData.title}
        description={articleData.description || "404 description not found"}
      />
      <Box
        display="flex"
        flexDir={{ base: "column", lg: "row" }}
        alignItems={{ lg: "start" }}
        px={[4, 6, 8]}
        mx="auto"
      >
        <ArticleBody data={articleData} userData={articleUserData} />
        <UserArticle data={articleUserData} />
      </Box>
    </>
  );
};

export const getServerSideProps = async ({ params }) => {
  const userArticle = await fetcher(
    `${BASE_URL}/articles/${params.user}/${params.article}`
  );
  const userData = await fetcher(
    `${BASE_URL}users/by_username?url=${params.user}`
  );

  const errorCode = userArticle.error ? userArticle : false;

  return { props: { userArticle, userData, errorCode } };
};

export default Article;
