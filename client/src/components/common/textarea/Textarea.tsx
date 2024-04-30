import {ChangeEvent, ReactElement, useRef, useState} from "react";
import * as styles from "./Textarea.css";

interface TextareaProps {
  onChangeTextarea: (value: string) => void;
  placeholder?: string;
}

export const Textarea = (props: TextareaProps): ReactElement => {
  const { onChangeTextarea, placeholder } = props;
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
    <div className={styles.textareaLayout}>
      <textarea
        ref={textareaRef}
        value={feedText}
        className={styles.textarea}
        placeholder={placeholder}
        onChange={handleChangeTextarea}
      ></textarea>
    </div>
  );
};
