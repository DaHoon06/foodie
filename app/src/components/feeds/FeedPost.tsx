import { ReactElement } from "react";
import * as styles from "./FeedPost.css";

export const FeedPost = (): ReactElement => {
  return (
    <form className={styles.FeedPostLayout}>
      <textarea
        className={styles.FeedTextarea}
        placeholder="여러분들의 식도락 여행기를 들려주세요!"
      ></textarea>
    </form>
  );
};
