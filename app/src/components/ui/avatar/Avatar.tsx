import { ReactElement } from "react";
import * as styles from "./Avatar.css";
import Image from "next/image";

interface AvatarProp {
  src: string;
  alt: string;
}

export const Avatar = (props: AvatarProp): ReactElement => {
  const { src, alt } = props;
  return (
    <div className={styles.AvatarLayout}>
      <Image src={src} alt={alt} width={40} height={40} />
    </div>
  );
};
