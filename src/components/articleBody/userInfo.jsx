import {
  Box,
  Button,
  chakra,
  Icon,
  Link,
  List,
  ListItem,
  Text,
} from "@chakra-ui/react"
import { FiExternalLink } from "react-icons/fi"
import NextImage from "next/image"
import NextLink from "next/link"

const Item = ({ title, data }) => (
  <>
    {data && (
      <ListItem textColor="gray.600">
        <Text as="span" fontWeight="500" textColor="gray.700">
          {title}
        </Text>
        {data}
      </ListItem>
    )}
  </>
)

const Header = ({ data, isOrganization }) => (
  <>
    <Box mt="-35px">
      <NextLink href={`/${data.username}`}>
        <a>
          <NextImage
            src={data.profile_image}
            width="60"
            height="60"
            alt={data.name}
            className={isOrganization ? "orgImage" : "userImage"}
          />
        </a>
      </NextLink>
    </Box>

    <NextLink href={`/${data.username}`}>
      <chakra.a href={`/${data.username}`} fontSize="lg" fontWeight="600">
        {data.name}
      </chakra.a>
    </NextLink>
  </>
)

const UserInfo = ({ data, isOrganization }) => (
  <>
    <Header data={data} isOrganization={isOrganization} />

    {isOrganization && data.tag_line && (
      <Text py="2" textColor="gray.600">
        {data.tag_line}
      </Text>
    )}

    <Text py="2" textColor="gray.600">
      {data.summary ? data.summary : "404 bio not found"}
    </Text>

    {!isOrganization && (
      <List>
        <Item title="Location: " data={data.location} />
        <Item title="Joined: " data={data.joined_at} />
      </List>
    )}

    {isOrganization && data.url && (
      <>
        <Button colorScheme="teal" variant="link">
          <Link
            href={data.url}
            d="flex"
            _focus={{ outline: "none" }}
            isExternal
          >
            Visit {data.username}{" "}
            <Icon as={FiExternalLink} w="6" h="6" pl="3px" />
          </Link>
        </Button>
      </>
    )}
  </>
)

export default UserInfo
