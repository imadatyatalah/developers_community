import { Box } from "@chakra-ui/react";
import useSwr from "swr";

import { BASE_URL, fetcher } from "../../../config";
import ErrorPage from "next/error";
import UserProfile from "../userProfile";
import Article from "../article";
import OrganisationTeam from "../userProfile/organisationUsers";
import OrganisationTechStack from "../userProfile/organizationTechStack";

const UserPage = ({
  user,
  userInfo,
  userArticles,
  organizationUsers,
  errorCode,
}) => {
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

  const { data: organizationUsersData } = useSwr(
    userInfoData.type_of === "organization" &&
      `${BASE_URL}organizations/${user}/users`,
    fetcher,
    {
      initialData: organizationUsers,
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
      <UserProfile
        data={userInfoData}
        isOrganization={userInfo.type_of === "organization"}
      />
      <Box
        display="flex"
        flexDir={{ base: "column-reverse", lg: "row" }}
        alignItems={{ lg: "start" }}
        px={[4, 6, 8]}
        mx="auto"
      >
        <Article
          data={userArticlesData}
          userData={userInfoData}
          isUser={userInfo.type_of === "user"}
          isProfile
        />
        {userInfoData.type_of === "organization" && (
          <Box d="flex" flexDir={{ base: "column-reverse", lg: "column" }}>
            <OrganisationTeam data={organizationUsersData} />
            {userInfoData.tech_stack && (
              <OrganisationTechStack data={userInfoData.tech_stack} />
            )}
          </Box>
        )}
      </Box>
    </>
  );
};

export default UserPage;
