import {ReactElement} from "react";
import * as styles from './KakaoButton.css';
import Image from "next/image";
import {Typography} from "@components/common/typography/Typography";


export const KakaoButton = (): ReactElement => {
  return (
    <button type={'button'} className={styles.kakaoLoginButton}>
      <Image className={styles.kakaoLogo} src={'/images/kakao.png'} alt={'카카오_로그인_버튼'} width={40} height={40}/>
      <Typography as={'span'} fontSize={16} fontWeight={700}>카카오 로그인</Typography>
    </button>
  )
}
