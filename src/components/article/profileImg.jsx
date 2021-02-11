import { chakra } from "@chakra-ui/react";
import NextLink from "next/link";
import NextImage from "next/image";

import styles from "./css/index.module.css";

const ProfileImgComp = ({
  href,
  profileImg,
  profileImgAlt,
  size,
  styles,
  ...props
}) => (
  <>
    <NextLink href={href}>
      <chakra.a href={href} {...props}>
        <NextImage
          src={profileImg}
          width={size}
          height={size}
          priority
          alt={profileImgAlt}
          className={styles}
        />
      </chakra.a>
    </NextLink>
  </>
);

const ProfileImg = (props) => {
  const { user, organization } = props.data;

  return (
    <>
      {organization ? (
        <>
          <ProfileImgComp
            href={`/${organization.username}`}
            profileImg={organization.profile_image_90}
            profileImgAlt={organization.name}
            size="40"
            px="5px"
            styles={styles.orgImage}
          />
          <ProfileImgComp
            href={`/${user.username}`}
            profileImg={user.profile_image_90}
            profileImgAlt={user.name}
            size="27"
            ml="-8"
            px="5px"
            pt="8"
            styles={styles.userImage}
          />
        </>
      ) : (
        <ProfileImgComp
          href={`/${user.username}`}
          profileImg={user.profile_image_90}
          profileImgAlt={user.name}
          size="40"
          px="5px"
          pt="5px"
          styles={styles.userImage}
        />
      )}
    </>
  );
};

export default ProfileImg;
