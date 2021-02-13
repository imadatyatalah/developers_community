import { useRouter } from "next/router";

import { getUserArticle } from "../../../lib/userArticle";
import { getUser } from "../../../lib/user";
import { getOrganization } from "../../../lib/organization";
import SEO from "../../../components/seo";
import ArticlePage from "../../../components/pages/article";

const Article = ({ userArticle, userInfo, errorCode }) => {
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

  const errorCode = userArticle.error ? userArticle : false;

  return { props: { userArticle, userInfo, errorCode } };
};

export default Article;
