import { List, ListItem, Icon } from "@chakra-ui/react";
import { FaBirthdayCake } from "react-icons/fa";
import { IoLocationSharp } from "react-icons/io5";
import dayjs from "dayjs";
import localizedFormat from "dayjs/plugin/localizedFormat";

dayjs.extend(localizedFormat);

const Item = ({ icon, children }) => (
  <>
    <ListItem px="2">
      <Icon as={icon} opacity="70%" w="5" h="5" mt="-2px" />
      {children}
    </ListItem>
  </>
);

const UserInfo = ({ data, isOrganization }) => (
  <>
    <List
      d="flex"
      flexDir={{ base: "column", md: "row" }}
      justifyContent={{ md: "center", lg: "unset" }}
      mx={{ md: "auto", lg: "0" }}
    >
      <Item icon={FaBirthdayCake}>
        {" "}
        Joined on{" "}
        {isOrganization ? dayjs(data.joined_at).format("ll") : data.joined_at}
      </Item>

      {data.location && <Item icon={IoLocationSharp}> {data.location}</Item>}
    </List>
  </>
);

export default UserInfo;
