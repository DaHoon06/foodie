import * as styles from "./HomeContainer.css";
import { KakaoMap } from "@components/kakao/KakaoMap";
import { FeedCard } from "@components/ui/cards/feeds/FeedCard";
import { Typography } from "@components/common/typography/Typography";
import { ThumbnailCard } from "@components/ui/cards/thumbnail/ThumbnailCard";
import { CustomHorizontalBar } from "@components/ui/nav/CustomHorizontalBar";
import FlexBox from "@components/common/headless/flex-box/FlexBox";
import { FollowCard } from "@components/ui/cards/FollowCard";

export const HomeContainer = () => {
  return (
    <div className={styles.homeContainerLayout}>
      <KakaoMap />
      <div className={styles.homeContainer}>
        <FlexBox alignItems={"flex-start"} gap={10}>
          <Typography variant="h2">최근 다녀온 여행기</Typography>
          <CustomHorizontalBar>
            <ThumbnailCard />
            <ThumbnailCard />
            <ThumbnailCard />
            <ThumbnailCard />
          </CustomHorizontalBar>
        </FlexBox>

        <FlexBox alignItems={"flex-start"} gap={10}>
          <Typography variant="h2">오늘의 추천 미식가</Typography>
          <CustomHorizontalBar>
            <FollowCard />
            <FollowCard />
            <FollowCard />
            <FollowCard />
          </CustomHorizontalBar>
        </FlexBox>
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
