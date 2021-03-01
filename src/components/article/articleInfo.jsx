import { Box, Text } from "@chakra-ui/react";
import NextLink from "next/link";
import NextImage from "next/image";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";

dayjs.extend(relativeTime);

const ArticleInfo = (props) => {
  const { data } = props;

  if (data.organization && props.isUser) {
    return (
      <>
        <Box as="header" display="flex" alignItems="center">
          <NextLink href={`/${data.organization.username}`}>
            <a className="articleOrgImage" aria-label={data.organization.name}>
              <NextImage
                src={data.organization.profile_image_90}
                width="40"
                height="40"
                alt={data.organization.name}
                className="orgImage"
              />
            </a>
          </NextLink>

          <NextLink href={`/${data.user.username}`}>
            <a className="orgArticleUserImage" aria-label={data.user.name}>
              <NextImage
                src={data.user.profile_image_90}
                width="30"
                height="30"
                alt={data.user.name}
                className="userImage"
              />
            </a>
          </NextLink>

          <Box>
            <NextLink href={`/${data.user.username}`}>
              <a className="articleUserName">{data.user.name}</a>
            </NextLink>{" "}
            <Text as="span" color="gray.600">
              for{" "}
            </Text>
            <NextLink href={`/${data.organization.username}`}>
              <a className="articleUserName">{data.organization.name}</a>
            </NextLink>
            <Text fontSize="sm" fontWeight="300">
              {data.readable_publish_date} ({dayjs(data.published_at).fromNow()}
              )
            </Text>
          </Box>
        </Box>
      </>
    );
  }

  return (
    <>
      <Box as="header" display="flex" alignItems="center">
        <NextLink href={`/${data.user.username}`}>
          <a className="articleUserImage" aria-label={data.user.name}>
            <NextImage
              src={data.user.profile_image_90}
              width="40"
              height="40"
              alt={data.user.name}
              className="userImage"
            />
          </a>
        </NextLink>

        <Box>
          <NextLink href={`/${data.user.username}`}>
            <a className="articleUserName">{data.user.name}</a>
          </NextLink>

          <Text fontSize="sm" fontWeight="300">
            {data.readable_publish_date} ({dayjs(data.published_at).fromNow()})
          </Text>
        </Box>
      </Box>
    </>
  );
};

export default ArticleInfo;
