import { Text } from "@chakra-ui/react";
import NextLink from "next/link";

const UserName = (props) => {
  const { user, organization } = props.data;

  if (organization && props.isUser) {
    return (
      <>
        <NextLink href={user.username}>
          <a className="articleUserName">{user.name}</a>
        </NextLink>{" "}
        <Text as="span" color="gray.600">
          for{" "}
        </Text>
        <NextLink href={organization.username}>
          <a className="articleUserName">{organization.name}</a>
        </NextLink>
      </>
    );
  }

  return (
    <NextLink href={user.username}>
      <a className="articleUserName">{user.name}</a>
    </NextLink>
  );
};

export default UserName;
