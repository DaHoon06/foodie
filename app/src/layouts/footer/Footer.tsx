import {ReactElement} from "react";
import * as styles from './Footer.css';

export const Footer = (): ReactElement => {
  return (
    <footer className={styles.footerLayout}>
      <div className={styles.information}>
        <div>
          <p>운영 시간 : 09:00 ~ 18:00</p>
          <p>점심 시간 : 12:30 ~ 13:30</p>
          <p>주말 및 공휴일 휴무</p>
        </div>
        <address>
          <p>대표자 : 전다훈</p>
          <p>이메일 : dahoon226@gmail.com</p>
        </address>
      </div>
      <div className={styles.copyright}>
        <p>ⓒ 2024. Dahoon06. All rights reserved.</p>
        <div>
          <span>이용약관</span>
          <span>개인정보처리방침</span>
        </div>
      </div>
    </footer>
  )
}