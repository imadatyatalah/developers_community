import { useRouter } from "next/router";

import { getUser } from "../../lib/user";
import { getOrganization } from "../../lib/organization";
import { getUserArticles } from "../../lib/userArticles";
import { getOrganizationUsers } from "../../lib/organizationUsers";
import SEO from "../../components/seo";
import UserPage from "../../components/pages/user";

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

  const userInfo =
    user.type_of === "user" ? user : await getOrganization(params.user);

  const userArticles = await getUserArticles(params.user, 30);

  const organizationUsers =
    userInfo.type_of === "organization" &&
    (await getOrganizationUsers(params.user));

  const errorCode = userInfo.error ? userInfo : false;

  return { props: { userInfo, userArticles, organizationUsers, errorCode } };
};

export default User;
