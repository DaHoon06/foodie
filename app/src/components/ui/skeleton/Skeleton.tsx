import { ReactElement } from "react";
import * as styles from "./Skeleton.css";

interface SkeletonProps {
  isLoading: boolean;
  width?: string | number;
  height?: string | number;
}

export const Skeleton = (props: SkeletonProps): ReactElement => {
  const { isLoading } = props;

  return <>{isLoading ? <div className={styles.LoadingMapOverlay} /> : null}</>;
};
