import { List, ListItem, Icon } from "@chakra-ui/react";
import { FaBirthdayCake } from "react-icons/fa";
import { IoLocationSharp } from "react-icons/io5";

const UserInfo = ({ data }) => (
  <>
    <List
      d="flex"
      flexDir={{ base: "column", md: "row" }}
      justifyContent={{ md: "center", lg: "unset" }}
      mx={{ md: "auto", lg: "0" }}
    >
      <ListItem px="2">
        <Icon as={FaBirthdayCake} opacity="70%" w="5" h="5" mt="-2px" /> Joined
        on {data.joined_at}
      </ListItem>

      {data.location && (
        <ListItem px="2">
          <Icon as={IoLocationSharp} opacity="70%" w="5" h="5" mt="-2px" />{" "}
          {data.location}
        </ListItem>
      )}
    </List>
  </>
);

export default UserInfo;
