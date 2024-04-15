import * as styles from './AppLanding.css';
import Image from "next/image";
import {Typography} from "@components/common/typography/Typography";

export const AppLanding = () => {
  return (
    <div className={styles.appLandingLayout}>
      <div className={styles.appLandingContainer}>
        <div className={styles.bannerWrapper}>
          <Image priority={true} className={styles.bannerImage} src={'/images/banner2.webp'} alt={'thumbnail_banner'}
                 width={200}
                 height={300}/>
        </div>
        <div className={styles.contentsBoxDownloadGuid}>
          <Typography fontWeight={600} fontSize={20} lineHeight={24}>
            고푸디 모바일 앱 설치하고
          </Typography>
          <Typography color={"gray400"} lineHeight={24}>
            간편하게 맛집을 검색해보세요.
          </Typography>
        </div>
      </div>
    </div>
  )
}
