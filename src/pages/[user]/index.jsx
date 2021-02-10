import { useRouter } from "next/router";
import { Box } from "@chakra-ui/react";
import dynamic from "next/dynamic";
import useSwr from "swr";

const ErrorPage = dynamic(() => import("next/error"));
const UserProfile = dynamic(() => import("../../components/userProfile"));
const Article = dynamic(() => import("../../components/article"));

import { fetcher, BASE_URL } from "../../../config";
import { getUser } from "../../lib/user";
import { getUserArticles } from "../../lib/userArticles";
import SEO from "../../components/seo";

const User = ({ userInfo, userArticles, errorCode }) => {
  const router = useRouter();
  const { user } = router.query;

  const { data: userInfoData } = useSwr(
    `${BASE_URL}users/by_username?url=${user}`,
    fetcher,
    {
      initialData: userInfo,
    }
  );

  const { data: userArticlesData } = useSwr(
    `${BASE_URL}articles?username=${user}`,
    fetcher,
    {
      initialData: userArticles,
    }
  );

  if (errorCode) {
    return (
      <ErrorPage
        statusCode={errorCode.status}
        title={`user ${errorCode.error}`}
      />
    );
  }

  return (
    <>
      <SEO
        title={userInfoData.name}
        description={userInfoData.summary || "404 bio not found"}
      />

      <UserProfile data={userInfoData} />
      <Box px={[4, 6, 8]} mx="auto">
        <Article data={userArticlesData} userData={userInfoData} isProfile />
      </Box>
    </>
  );
};

export const getServerSideProps = async ({ params }) => {
  const userInfo = await getUser(params.user);
  const userArticles = await getUserArticles(params.user);

  const errorCode = userInfo.error ? userInfo : false;

  return { props: { userInfo, userArticles, errorCode } };
};

export default User;
