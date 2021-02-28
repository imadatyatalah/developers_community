import NextLink from "next/link";
import NextImage from "next/image";

const ProfileImg = (props) => {
  const { user, organization } = props.data;

  if (organization && props.isUser) {
    return (
      <>
        <NextLink href={`/${organization.username}`}>
          <a className="articleOrgImage">
            <NextImage
              src={organization.profile_image_90}
              width="40"
              height="40"
              alt={organization.name}
              className="orgImage"
            />
          </a>
        </NextLink>

        <NextLink href={`/${user.username}`}>
          <a className="orgArticleUserImage">
            <NextImage
              src={user.profile_image_90}
              width="30"
              height="30"
              alt={user.name}
              className="userImage"
            />
          </a>
        </NextLink>
      </>
    );
  }

  return (
    <>
      <NextLink href={`/${user.username}`}>
        <a className="articleUserImage">
          <NextImage
            src={user.profile_image_90}
            width="40"
            height="40"
            alt={user.name}
            className="userImage"
          />
        </a>
      </NextLink>
    </>
  );
};

export default ProfileImg;
