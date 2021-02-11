import { useRouter } from "next/router";
import { Box } from "@chakra-ui/react";
import dynamic from "next/dynamic";
import useSwr from "swr";

const ErrorPage = dynamic(() => import("next/error"));
const UserProfile = dynamic(() => import("../../components/userProfile"));
const Article = dynamic(() => import("../../components/article"));

import { fetcher, BASE_URL } from "../../../config";
import { getUser } from "../../lib/user";
import { getOrganization } from "../../lib/organization";
import { getUserArticles } from "../../lib/userArticles";
import { getOrganizationArticles } from "../../lib/organizationArticles";
import SEO from "../../components/seo";

const User = ({ userInfo, userArticles, errorCode }) => {
  const router = useRouter();
  const { user } = router.query;

  const { data: userInfoData } = useSwr(
    userInfo.type_of === "user"
      ? `${BASE_URL}users/by_username?url=${user}`
      : `${BASE_URL}organizations/${user}`,
    fetcher,
    {
      initialData: userInfo,
    }
  );

  const { data: userArticlesData } = useSwr(
    userInfo.type_of === "user"
      ? `${BASE_URL}articles?username=${user}`
      : `${BASE_URL}organizations/${user}/articles`,
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

      <UserProfile
        data={userInfoData}
        isOrganization={userInfo.type_of === "organization"}
      />
      <Box px={[4, 6, 8]} mx="auto">
        <Article
          data={userArticlesData}
          userData={userInfoData}
          isUser={userInfo.type_of === "user"}
          isProfile
        />
      </Box>
    </>
  );
};

export const getServerSideProps = async ({ params }) => {
  const user = await getUser(params.user);
  const userArts = await getUserArticles(params.user);

  const userInfo =
    user.type_of === "user" ? user : await getOrganization(params.user);
  const userArticles = userArts.organization
    ? await getOrganizationArticles(params.user)
    : userArts;

  const errorCode = userInfo.error ? userInfo : false;

  return { props: { userInfo, userArticles, errorCode } };
};

export default User;
