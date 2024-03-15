import {ReactElement} from "react";
import * as styles from "./star.css";

interface StarRatingProps {
  average: number;
}

/**
 * @description 너비 구하기
 * @param average
 */
export const widthCalculation = (average: number) => {
  if (average >= 0 && average <= 0.5) {
    return "10";
  } else if (average > 0.5 && average <= 1) {
    return "20";
  } else if (average > 1 && average <= 1.5) {
    return "30";
  } else if (average > 1.5 && average <= 2) {
    return "40";
  } else if (average > 2 && average <= 2.5) {
    return "50";
  } else if (average > 2.5 && average <= 3) {
    return "60";
  } else if (average > 3 && average <= 4) {
    return "70";
  } else if (average > 4 && average <= 4.5) {
    return "80";
  } else if (average > 4.5 && average <= 4.9) {
    return "90";
  } else if (average === 5) {
    return "100";
  } else {
    return '100';
  }
}

export const StarRating = (props: StarRatingProps): ReactElement => {
  const {average} = props;
  const width = widthCalculation(average);


  return (
    <div className={styles.starRatings}>
      <div
        className={styles.starRatingsFill}
        style={{width: `${width}%`}}
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
