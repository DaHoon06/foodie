import {NextPage} from "next";
import {ReactElement} from "react";
import {BasicLayout} from "@layouts/BasicLayout";
import Image from "next/image";
import {Typography} from "@components/common/typography/Typography";
import FlexBox from "@components/common/headless/flex-box/FlexBox";
import * as styles from '@styles/pages/ManagementPage.css';
import {KakaoButton} from "@components/buttons/KakaoButton";

const ManagementPage: NextPage = (): ReactElement => {
  return (
    <BasicLayout>
      <FlexBox justifyContent={'center'} gap={8} className={styles.managementPageLayout}>
        <Image className={styles.logo} src={'/images/logo.svg'} alt={'foodie_logo'} width={200} height={100}/>
        <Typography fontWeight={700} letterSpacing={'-0.5'} fontSize={16}>미식가들의 식도락 여행기
          <Typography className={styles.goFoodie} as={'span'} fontWeight={700} color={'primary'}
                      fontSize={18}>고푸디</Typography>
        </Typography>
      </FlexBox>
      <FlexBox>
        <KakaoButton />
      </FlexBox>
    </BasicLayout>
  )
}

export default ManagementPage;
