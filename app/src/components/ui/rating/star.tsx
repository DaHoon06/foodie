import { ReactElement } from "react";
import * as styles from "./star.css";

interface StarRatingProps {
  average: number;
}

/**
 * @description 너비 구하기
 * @param average 
 */
export const widthCaculation = (average: number) => {

}

export const StarRating = (props: StarRatingProps): ReactElement => {
  const { average } = props;

  
  return (
    <div className={styles.starRatings}>
      <div
        className={styles.starRatingsFill}
        style={{ width: `${average * 10}%` }}
      >
        <span>★</span>
        <span>★</span>
        <span>★</span>
        <span>★</span>
        <span>★</span>
      </div>
      <div className={styles.starRatingsBase}>
        <span>★</span>
        <span>★</span>
        <span>★</span>
        <span>★</span>
        <span>★</span>
      </div>
    </div>
  );
};
