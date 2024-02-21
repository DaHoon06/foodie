import * as styles from './AppLanding.css';
import Image from "next/image";
import {Typography} from "@components/common/typography/Typography";

export const AppLanding = () => {
  return (
    <div className={styles.appLandingLayout}>
      <div className={styles.appLandingContainer}>
        <div className={styles.bannerWrapper}>
          <Image className={styles.bannerImage} src={'/images/banner2.webp'} alt={'thumbnail_banner'} width={200}
                 height={300}/>
        </div>
        <Typography>
          TEST
        </Typography>
        <div className={styles.contentsBoxDownloadGuid}>
          고푸디 모바일 앱 설치하고 <br/>
          간편하게 맛집을 검색해보세요.
        </div>
      </div>
    </div>
  )
}