import { useRouter } from "next/router";
import dynamic from "next/dynamic";

const UserPage = dynamic(() => import("../../components/pages/user"));

import { getUser } from "../../lib/user";
import { getOrganization } from "../../lib/organization";
import { getUserArticles } from "../../lib/userArticles";
import { getOrganizationArticles } from "../../lib/organizationArticles";
import { getOrganizationUsers } from "../../lib/organizationUsers";
import SEO from "../../components/seo";

const User = ({ userInfo, userArticles, organizationUsers, errorCode }) => {
  const router = useRouter();
  const { user } = router.query;

  return (
    <>
      <SEO
        title={userInfo.name}
        description={userInfo.summary || "404 bio not found"}
      />

      <UserPage
        user={user}
        userInfo={userInfo}
        userArticles={userArticles}
        organizationUsers={organizationUsers}
        errorCode={errorCode}
      />
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

  const organizationUsers = await getOrganizationUsers(params.user);

  const errorCode = userInfo.error ? userInfo : false;

  return { props: { userInfo, userArticles, organizationUsers, errorCode } };
};

export default User;
