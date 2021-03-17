import { Box, Heading } from "@chakra-ui/react"
import NextLink from "next/link"
import NextImage from "next/image"

import DefaultContainer from "../UI/defaultContainer"

const OrganisationUsers = ({ data }) => (
  <>
    <DefaultContainer
      my="2"
      minW={{ lg: "350px" }}
      maxW={{ lg: "350px" }}
      isSideComp
    >
      <Heading fontSize="2xl" fontWeight="600">
        Meet the team
      </Heading>

      <Box pt="2">
        {data.map((user) => (
          <NextLink href={`/${user.username}`} key={user.username}>
            <a style={{ padding: "4px" }}>
              <NextImage
                src={user.profile_image}
                width="40"
                height="40"
                alt={user.name}
                title={user.name}
                className="userImage"
              />
            </a>
          </NextLink>
        ))}
      </Box>
    </DefaultContainer>
  </>
)

export default OrganisationUsers
