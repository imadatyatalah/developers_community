import { Box } from "@chakra-ui/react";
import NextLink from "next/link";
import NextImage from "next/image";

const OrganizationProfile = ({ data }) => {
  const href = `/${data.organization.username}`;

  return (
    <>
      <Box d="flex" alignItems="center">
        <NextLink href={href}>
          <a style={{ padding: "0 5px" }}>
            <NextImage
              src={data.organization.profile_image_90}
              width="40"
              height="40"
              alt={data.name}
              className="orgImage"
            />
          </a>
        </NextLink>

        <NextLink href={href}>
          <a style={{ paddingBottom: "5px" }} className="articleUserName">
            {data.organization.name}
          </a>
        </NextLink>
      </Box>
    </>
  );
};

export default OrganizationProfile;
