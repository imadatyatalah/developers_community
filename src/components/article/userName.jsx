import { chakra, Text } from "@chakra-ui/react";
import NextLink from "next/link";

const UserNameComp = ({ href, children }) => (
  <>
    <NextLink href={`/${href}`}>
      <chakra.a
        href={`/${href}`}
        fontWeight="600"
        color="black"
        opacity="60%"
        transitionDuration="250ms"
        _hover={{ opacity: "100%" }}
      >
        {children}
      </chakra.a>
    </NextLink>
  </>
);

const UserName = (props) => {
  const { user, organization } = props.data;

  return (
    <>
      {organization ? (
        <Text color="gray.600">
          <UserNameComp href={user.username}>{user.name}</UserNameComp> for{" "}
          <UserNameComp href={organization.username}>
            {organization.name}
          </UserNameComp>
        </Text>
      ) : (
        <UserNameComp href={user.username}>{user.name}</UserNameComp>
      )}
    </>
  );
};

export default UserName;
