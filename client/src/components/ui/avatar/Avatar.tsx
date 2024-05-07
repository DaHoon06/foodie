import React, { ReactElement } from "react";
import * as styles from "./Avatar.css";
import Image from "next/image";

interface AvatarProp {
  src: string;
  alt: string;
}

export const Avatar = React.memo((props: AvatarProp): ReactElement => {
  const { src, alt } = props;
  return (
    <div className={styles.avatarLayout}>
      <Image
        className={styles.avatarImage}
        src={src}
        alt={alt}
        width={40}
        height={40}
        priority={true}
      />
    </div>
  );
});

Avatar.displayName = "Avatar";
