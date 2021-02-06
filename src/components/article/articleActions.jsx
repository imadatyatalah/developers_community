import { Box, chakra, Icon } from "@chakra-ui/react";
import { RiHeart2Line } from "react-icons/ri";
import { BiMessageRounded } from "react-icons/bi";
import NextLink from "next/link";

const ActionsContainer = ({ href, icon, children }) => (
  <>
    <NextLink href={href}>
      <chakra.a
        href={href}
        py="1"
        px="2"
        rounded="md"
        mr="4"
        transitionDuration="250ms"
        _hover={{ bgColor: "gray.100" }}
      >
        <Icon as={icon} w="5" h="5" mr="1" mb="3px" />
        {children}
      </chakra.a>
    </NextLink>
  </>
);

const ArticleActions = ({ data }) => (
  <>
    <Box py="3">
      <ActionsContainer href={data.path} icon={RiHeart2Line}>
        {data.public_reactions_count} Reactions
      </ActionsContainer>

      <ActionsContainer href={`${data.path}#comments`} icon={BiMessageRounded}>
        {data.comments_count} comments
      </ActionsContainer>
    </Box>
  </>
);

export default ArticleActions;
