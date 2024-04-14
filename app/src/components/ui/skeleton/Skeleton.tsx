import { CSSProperties, ReactElement } from "react";
import * as styles from "./Skeleton.css";

interface SkeletonProps {
  isLoading: boolean;
  width?: string | number;
  height?: string | number;
}

export const Skeleton = (props: SkeletonProps): ReactElement => {
  const { isLoading, width, height } = props;

  let inlineStlye: CSSProperties = {
    width: `${width}px`,
    height: `${height}px`,
  };
  if (width && height) {
  }

  return (
    <>
      {isLoading ? (
        <div style={inlineStlye} className={styles.LoadingMapOverlay} />
      ) : null}
    </>
  );
};
