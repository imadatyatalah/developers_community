import { Box, Divider } from "@chakra-ui/react";
import NextLink from "next/link";

import DefaultContainer from "../UI/defaultContainer";
import ArticleTags from "../article/articleTags";

const Header = ({ user }) => (
  <>
    <Box as="header">
      <Box fontSize="2xl" fontWeight="600">
        More from{" "}
        <NextLink href={`/${user.username}`}>
          {/* Color: Chakra UI Teal.400 */}
          <a style={{ color: "#38b2ac" }}>{user.name}</a>
        </NextLink>
      </Box>
    </Box>
  </>
);

const MoreFrom = ({ data, user }) => (
  <>
    <DefaultContainer
      mb="2"
      minW={{ lg: "350px" }}
      maxW={{ lg: "350px" }}
      isSideComp
    >
      <Header user={user} />

      <Box pt="2">
        {data.map((item) => (
          <Box py="1" key={item.id}>
            <Divider />
            <Box>
              <NextLink href={item.path}>
                <a className="smallTitle">{item.title}</a>
              </NextLink>
            </Box>

            <Box>
              <ArticleTags data={item.tag_list} />
            </Box>
          </Box>
        ))}
      </Box>
    </DefaultContainer>
  </>
);

export default MoreFrom;
