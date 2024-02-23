import {ReactElement} from "react";
import {Typography} from "@components/common/typography/Typography";
import * as styles from './SignInAlertBox.css';
import Image from "next/image";
import FlexBox from "@components/common/headless/flex-box/FlexBox";
import {KakaoButton} from "@components/buttons/KakaoButton";

export const SignInAlertBox = (): ReactElement => {
  return (
    <div className={styles.signInAlertBoxLayout}>
      <FlexBox justifyContent={'center'} gap={8}>
        <Image className={styles.logo} src={'/images/logo.svg'} alt={'foodie_logo'} width={120} height={60}/>
        <Typography fontWeight={700} letterSpacing={'-0.5'} fontSize={16}>미식가들의 식도락 여행기
          <Typography className={styles.goFoodie} as={'span'} fontWeight={700} color={'primary'}
                      fontSize={18}>고푸디</Typography>
        </Typography>
        <Typography letterSpacing={'-1.5'} fontWeight={400} fontSize={12} color={'gray400'}>로그인을 하고 여러분의 식도락 여행 이야기를
          들려주세요.</Typography>
      </FlexBox>
      <FlexBox className={styles.buttonWrapper}>
        <KakaoButton />
      </FlexBox>

    </div>
  )
}
