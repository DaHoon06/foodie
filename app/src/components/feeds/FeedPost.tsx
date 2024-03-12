import {ChangeEvent, ReactElement, useState} from "react";
import * as styles from "./FeedPost.css";

interface FeedPostProps {
  onChangeTextarea: (value: string) => void;
}

export const FeedPost = (props: FeedPostProps): ReactElement => {
  const { onChangeTextarea } = props;
  const [feedText, setFeedText] = useState('');

  const handleChangeTextarea = (e: ChangeEvent<HTMLTextAreaElement>) => {
    e.preventDefault();
    setFeedText(e.target.value);
    onChangeTextarea(e.target.value)
  }

  return (
    <div className={styles.FeedPostLayout}>
      <textarea
        value={feedText}
        className={styles.FeedTextarea}
        placeholder="여러분들의 식도락 여행기를 들려주세요!"
        onChange={handleChangeTextarea}
      ></textarea>
    </div>
  );
};
