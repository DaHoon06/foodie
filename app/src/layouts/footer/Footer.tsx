import {ReactElement} from "react";
import * as styles from './Footer.css';
import {Typography} from "@components/common/typography/Typography";
import FlexBox from "@components/common/headless/flex-box/FlexBox";

export const Footer = (): ReactElement => {
  return (
    <footer className={styles.footerLayout}>
      <div className={styles.information}>
        <div>
          <Typography color={'gray400'} fontSize={14}>운영 시간 : 09:00 ~ 18:00</Typography>
          <Typography color={'gray400'} fontSize={14}>점심 시간 : 12:30 ~ 13:30</Typography>
          <Typography color={'gray400'} fontSize={14}>주말 및 공휴일 휴무</Typography>
        </div>
        <address>
          <Typography color={'gray400'} fontSize={14}>대표자 : 전다훈</Typography>
          <Typography color={'gray400'} fontSize={14}>이메일 : dahoon226@gmail.com</Typography>
        </address>
      </div>
      <div className={styles.copyright}>
        <Typography color={'white000'} fontSize={12}>ⓒ 2024. Dahoon06. All rights reserved.</Typography>
        <FlexBox direction={'row'} gap={10}>
          <Typography color={'white000'} fontSize={12}>이용약관</Typography>
          <Typography color={'white000'} fontSize={12}>개인정보처리방침</Typography>
        </FlexBox>
      </div>
    </footer>
  )
}
