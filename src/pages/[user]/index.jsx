import { useRouter } from "next/router"
import { Box } from "@chakra-ui/react"
import { NextSeo } from "next-seo"
import useSwr from "swr"

import config, { BASE_URL, fetcher, MAX_WIDTH } from "../../../config"
import { getUser } from "../../lib/user"
import { getOrganization } from "../../lib/organization"
import { getUserArticles } from "../../lib/userArticles"
import { getOrganizationUsers } from "../../lib/organizationUsers"
import ErrorPage from "../404"
import UserProfile from "../../components/userProfile"
import Article from "../../components/article"
import OrganisationTeam from "../../components/userProfile/organisationUsers"
import OrganisationTechStack from "../../components/userProfile/organizationTechStack"

const User = ({ userInfo, userArticles, organizationUsers, errorCode }) => {
  const router = useRouter()
  const { user } = router.query

  const { data: userInfoData } = useSwr(
    userInfo.type_of === "user"
      ? `${BASE_URL}users/by_username?url=${user}`
      : `${BASE_URL}organizations/${user}`,
    fetcher,
    {
      initialData: userInfo,
    }
  )

  const { data: userArticlesData } = useSwr(
    userInfo.type_of === "user"
      ? `${BASE_URL}articles?username=${user}`
      : `${BASE_URL}organizations/${user}/articles`,
    fetcher,
    {
      initialData: userArticles,
    }
  )

  const { data: organizationUsersData } = useSwr(
    userInfoData.type_of === "organization" &&
      `${BASE_URL}organizations/${user}/users`,
    fetcher,
    {
      initialData: organizationUsers,
    }
  )

  const title = `${userInfo.name} | ${config.title}`
  const description = userInfo.summary
  const url = `${config.canonical}${userInfo.username}`

  if (errorCode) {
    return <ErrorPage />
  }

  return (
    <>
      <NextSeo
        title={title}
        description={description}
        canonical={url}
        openGraph={{
          title,
          description,
          url,
          type: "profile",
          profile: {
            username: userInfo.username,
            firstName: userInfo.name,
          },
          images: [
            {
              url: userInfo.profile_image,
              width: userInfo.type_of == "user" ? "320px" : "640px",
              height: userInfo.type_of == "user" ? "320px" : "640px",
              alt: userInfo.name,
            },
          ],
        }}
      />

      <UserProfile
        data={userInfoData}
        isOrganization={userInfo.type_of === "organization"}
      />
      <Box
        display="flex"
        flexDir={{ base: "column-reverse", lg: "row" }}
        alignItems={{ lg: "start" }}
        maxW={MAX_WIDTH}
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
  )
}

export const getServerSideProps = async ({ params }) => {
  const user = await getUser(params.user)

  const userInfo =
    user.type_of === "user" ? user : await getOrganization(params.user)

  const userArticles = await getUserArticles(params.user, 20)

  const organizationUsers = await getOrganizationUsers(params.user)

  const errorCode = userInfo.error ? userInfo : false

  return { props: { userInfo, userArticles, organizationUsers, errorCode } }
}

export default User
