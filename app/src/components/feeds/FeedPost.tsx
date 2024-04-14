import {ChangeEvent, ReactElement, useRef, useState} from "react";
import * as styles from "./FeedPost.css";

interface FeedPostProps {
  onChangeTextarea: (value: string) => void;
}

export const FeedPost = (props: FeedPostProps): ReactElement => {
  const { onChangeTextarea } = props;
  const textareaRef = useRef<HTMLTextAreaElement | null>(null);
  const [feedText, setFeedText] = useState('');

  const handleChangeTextarea = (e: ChangeEvent<HTMLTextAreaElement>) => {
    e.preventDefault();
    setFeedText(e.target.value);
    onChangeTextarea(e.target.value);

    if (textareaRef && textareaRef.current) {
      textareaRef.current.style.height = "0px";
      const scrollHeight = textareaRef.current.scrollHeight;
      textareaRef.current.style.height = scrollHeight + "px";
    }
  }

  return (
    <div className={styles.FeedPostLayout}>
      <textarea
        ref={textareaRef}
        value={feedText}
        className={styles.FeedTextarea}
        placeholder="여러분들의 식도락 여행기를 들려주세요!"
        onChange={handleChangeTextarea}
      ></textarea>
    </div>
  );
};
