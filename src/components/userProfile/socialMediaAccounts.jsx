import { Icon, List, ListItem } from "@chakra-ui/react"
import { FaTwitter, FaGithub } from "react-icons/fa"
import { FiExternalLink } from "react-icons/fi"

const IconContainer = ({ data, href, icon, name }) => (
  <>
    {data && (
      <ListItem px="1">
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={name}
        >
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
)

const SocialMediaAccounts = ({ data }) => (
  <>
    <List
      d="flex"
      justifyContent="center"
      py={{ base: "2", lg: "0" }}
      mb={{ lg: "1" }}
    >
      <IconContainer
        data={data.twitter_username}
        href={`https://twitter.com/${data.twitter_username}`}
        icon={FaTwitter}
        name="Twitter Account"
      />

      <IconContainer
        data={data.github_username}
        href={`https://github.com/${data.github_username}`}
        icon={FaGithub}
        name="Github Account"
      />

      <IconContainer
        data={data.website_url || data.url}
        href={data.website_url || data.url}
        icon={FiExternalLink}
        name="Website"
      />
    </List>
  </>
)

export default SocialMediaAccounts
