import { Box } from "@chakra-ui/react";
import useSwr from "swr";

import { BASE_URL, fetcher } from "../../../config";
import ErrorPage from "next/error";
import ArticleBody from "../articleBody";
import UserArticle from "../articleBody/userArticle";
import MoreFrom from "../articleBody/moreFrom";

const ArticlePage = ({
  user,
  article,
  userArticle,
  userInfo,
  userArticles,
  errorCode,
}) => {
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

export default ArticlePage;
