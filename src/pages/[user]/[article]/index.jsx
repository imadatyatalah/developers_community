import { useRouter } from "next/router";
import { Box } from "@chakra-ui/react";
import { NextSeo } from "next-seo";
import useSwr from "swr";

import config, { BASE_URL, fetcher, MAX_WIDTH } from "../../../../config";
import { getUserArticle } from "../../../lib/userArticle";
import { getUser } from "../../../lib/user";
import { getOrganization } from "../../../lib/organization";
import { getUserArticles } from "../../../lib/userArticles";
import ErrorPage from "../../404";
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
    return <ErrorPage />;
  }

  const title = `${userArticle.title}${config.title}`;
  const canonical = `${config.canonical}${userArticle.path.substring(1)}`;

  return (
    <>
      <NextSeo
        title={title}
        description={userArticle.description}
        canonical={canonical}
        openGraph={{
          title: title,
          description: userArticle.description,
          url: canonical,
          type: "article",
          images: [
            {
              url: userArticle.cover_image,
              alt: userArticle.title,
            },
            {
              url: userArticle.social_image,
              alt: userArticle.title,
            },
          ],
          article: {
            publishedTime: userArticle.published_at,
            modifiedTime: userArticle.edited_at,
            authors: [`${config.canonical}${userArticle.user.username}`],
          },
        }}
      />

      <Box
        display="flex"
        flexDir={{ base: "column", lg: "row" }}
        alignItems={{ lg: "start" }}
        maxW={MAX_WIDTH}
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
