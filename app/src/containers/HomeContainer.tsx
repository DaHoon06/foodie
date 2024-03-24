import * as styles from "./HomeContainer.css";
import { KakaoMap } from "@components/kakao/KakaoMap";
import { FeedCard } from "@components/ui/cards/FeedCard";
import { Typography } from "@components/common/typography/Typography";
import { HorizontalNavBar } from "@components/ui/nav/HorizontalBar";

export const HomeContainer = () => {
  return (
    <div className={styles.homeContainerLayout}>
      <KakaoMap />

      <div>
        <Typography>최근 다녀온 여행기</Typography>
        <div></div>
      </div>

      <div>
        <Typography>피드</Typography>
      </div>

      <div>
        <FeedCard />
        <FeedCard />
        <FeedCard />
        <FeedCard />
        <FeedCard />
      </div>
    </div>
  );
};
