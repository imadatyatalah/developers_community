import { useRouter } from "next/router";
import dynamic from "next/dynamic";

const ArticlePage = dynamic(() => import("../../../components/pages/article"));

import { getUserArticle } from "../../../lib/userArticle";
import { getUser } from "../../../lib/user";
import { getOrganization } from "../../../lib/organization";
import { getUserArticles } from "../../../lib/userArticles";
import SEO from "../../../components/seo";

const Article = ({ userArticle, userInfo, userArticles, errorCode }) => {
  const router = useRouter();
  const { user, article } = router.query;

  return (
    <>
      <SEO title={userArticle.title} description={userArticle.description} />

      <ArticlePage
        user={user}
        article={article}
        userArticle={userArticle}
        userInfo={userInfo}
        userArticles={userArticles}
        errorCode={errorCode}
      />
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
