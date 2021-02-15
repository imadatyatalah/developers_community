import { Text } from "@chakra-ui/react";
import moment from "moment";

const PublishDate = ({ data }) => (
  <>
    <Text fontSize="sm" fontWeight="300">
      {data.readable_publish_date} ({moment(data.published_at).fromNow()})
    </Text>
  </>
);

export default PublishDate;
