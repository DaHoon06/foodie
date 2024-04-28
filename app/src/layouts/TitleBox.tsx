import * as styles from './styles/TitleBox.css';
import FlexBox from "@components/common/headless/flex-box/FlexBox";
import {CSSProperties, PropsWithChildren} from "react";

interface Props extends PropsWithChildren {
  gap?: string | number;
  direction?: CSSProperties["flexDirection"];
  justifyContent?: CSSProperties["justifyContent"];
  alignItems?: CSSProperties["alignItems"];
}

export const TitleBox = (props: Props) => {
  const {children, gap = 0, justifyContent = 'flex-start'} = props;
  return (
    <FlexBox gap={gap} direction={"row"} justifyContent={justifyContent} height={56} className={styles.titleBoxLayout}>
      {children}
    </FlexBox>
  )

}
