import { useRouter } from "next/router";
import dynamic from "next/dynamic";
import useSwr from "swr";

const ErrorPage = dynamic(() => import("next/error"));
const UserProfile = dynamic(() => import("../../components/userProfile"));
const Article = dynamic(() => import("../../components/article"));

import { fetcher, BASE_URL } from "../../../config";
import SEO from "../../components/seo";

const User = ({ userData, userDataArticles, errorCode }) => {
  const router = useRouter();
  const { user } = router.query;

  const { data: userInfo } = useSwr(
    `${BASE_URL}users/by_username?url=${user}`,
    fetcher,
    {
      initialData: userData,
    }
  );

  const { data: userArticles } = useSwr(
    `${BASE_URL}articles?username=${user}`,
    fetcher,
    {
      initialData: userDataArticles,
    }
  );

  if (errorCode) {
    return <ErrorPage statusCode={errorCode} />;
  }

  return (
    <>
      <SEO
        title={userInfo.name}
        description={userInfo.summary || "404 bio not found"}
      />

      <UserProfile data={userInfo} />
      <Article data={userArticles} isProfile />
    </>
  );
};

export const getServerSideProps = async ({ params }) => {
  const userData = await fetcher(
    `${BASE_URL}users/by_username?url=${params.user}`
  );
  const userDataArticles = await fetcher(
    `${BASE_URL}articles?username=${params.user}`
  );

  const errorCode = userData.id ? false : userData.status;

  return { props: { userData, userDataArticles, errorCode } };
};

export default User;
