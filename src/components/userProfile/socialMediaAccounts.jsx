import { Icon, List, ListItem } from "@chakra-ui/react";
import { FaTwitter, FaGithub } from "react-icons/fa";
import { FiExternalLink } from "react-icons/fi";

const IconContainer = ({ data, href, icon }) => (
  <>
    {data && (
      <ListItem px="1">
        <a href={href} target="_blank" rel="noopener noreferrer">
          <Icon
            as={icon}
            opacity="70%"
            w="6"
            h="6"
            _hover={{ opacity: "100%" }}
          />
        </a>
      </ListItem>
    )}
  </>
);

const SocialMediaAccounts = ({ data }) => (
  <>
    <List
      py={{ base: "2", lg: "0" }}
      mb={{ lg: "1" }}
      d="flex"
      justifyContent="center"
    >
      <IconContainer
        data={data.twitter_username}
        href={`https://twitter.com/${data.twitter_username}`}
        icon={FaTwitter}
      />

      <IconContainer
        data={data.github_username}
        href={`https://github.com/${data.github_username}`}
        icon={FaGithub}
      />

      <IconContainer
        data={data.website_url}
        href={data.website_url}
        icon={FiExternalLink}
      />
    </List>
  </>
);

export default SocialMediaAccounts;
