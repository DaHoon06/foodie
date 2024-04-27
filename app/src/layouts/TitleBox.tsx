import * as styles from './TitleBox.css';
import FlexBox from "@components/common/headless/flex-box/FlexBox";
import {PropsWithChildren} from "react";

interface Props extends PropsWithChildren {
  gap?: string | number;
}

export const TitleBox = (props: Props) => {
  const {children, gap = 0} = props;
  return (
    <FlexBox gap={gap} direction={"row"} justifyContent={"flex-start"} height={56} className={styles.titleBoxLayout}>
      {children}
    </FlexBox>
  )

}
