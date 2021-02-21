import { useRouter } from "next/router";
import { Box } from "@chakra-ui/react";
import useSwr from "swr";

import { BASE_URL, fetcher } from "../../../../config";
import { getUserArticle } from "../../../lib/userArticle";
import { getUser } from "../../../lib/user";
import { getOrganization } from "../../../lib/organization";
import { getUserArticles } from "../../../lib/userArticles";
import ErrorPage from "../../_error";
import SEO from "../../../components/seo";
import ArticleBody from "../../../components/articleBody";
import UserArticle from "../../../components/articleBody/userArticle";
import MoreFrom from "../../../components/articleBody/moreFrom";

const Article = ({ userArticle, userInfo, userArticles, errorCode }) => {
  const router = useRouter();
  const { user, article } = router.query;

  const { data: articleData } = useSwr(
    `${BASE_URL}/articles/${user}/${article}`,
    fetcher,
    {
      initialData: userArticle,
    }
  );

  const { data: userData } = useSwr(
    articleData.organization
      ? `${BASE_URL}organizations/${user}`
      : `${BASE_URL}users/by_username?url=${user}`,
    fetcher,
    {
      initialData: userInfo,
    }
  );

  const { data: userArticlesData } = useSwr(
    `${BASE_URL}articles?username=${user}&per_page=3`,
    fetcher,
    {
      initialData: userArticles,
    }
  );

  if (errorCode) {
    return (
      <ErrorPage
        statusCode={errorCode.status}
        title={`article ${errorCode.error}`}
      />
    );
  }

  return (
    <>
      <SEO title={userArticle.title} description={userArticle.description} />

      <Box
        display="flex"
        flexDir={{ base: "column", lg: "row" }}
        alignItems={{ lg: "start" }}
        px={[4, 6, 8]}
        mx="auto"
      >
        <ArticleBody
          data={articleData}
          userData={userData}
          isOrganizationArticle={articleData.organization}
        />
        <Box>
          <UserArticle
            data={userData}
            isOrganization={articleData.organization}
          />
          <MoreFrom data={userArticlesData} user={userData} />
        </Box>
      </Box>
    </>
  );
};

export const getServerSideProps = async ({ params }) => {
  const userArticle = await getUserArticle(params.user, params.article);
  const userInfo = userArticle.organization
    ? await getOrganization(params.user)
    : await getUser(params.user);
  const userArticles = await getUserArticles(params.user, 3);

  const errorCode = userArticle.error ? userArticle : false;

  return { props: { userArticle, userInfo, userArticles, errorCode } };
};

export default Article;
