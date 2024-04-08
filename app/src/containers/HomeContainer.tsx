import * as styles from "./HomeContainer.css";
import {KakaoMap} from "@components/kakao/maps/KakaoMap";
import {FeedCard} from "@components/ui/cards/feeds/FeedCard";
import {Typography} from "@components/common/typography/Typography";
import {ThumbnailCard} from "@components/ui/cards/thumbnail/ThumbnailCard";
import {CustomHorizontalBar} from "@components/nav/CustomHorizontalBar";
import FlexBox from "@components/common/headless/flex-box/FlexBox";
import {FollowCard} from "@components/ui/cards/FollowCard";
import {useEffect, useState} from "react";
import {RegionFilter} from "@components/filters/RegionFilter";
import {VscSettings} from "react-icons/vsc";
import {useSession} from "next-auth/react";
import {recentlyFeedApi} from "@apis/feeds/feed.api";
import {todayRecommendUserApi} from "@apis/users/user.api";

export interface Filter {
  region: string;
}

export interface User {
  username: string;
  id: string;
  profile: string;
}

interface RecommendUser {
  _id: string;
  username: string;
}

export const HomeContainer = () => {
  const { data: sessionData } = useSession();
  const [filter, setFilter] = useState<Filter>({
    region: "seoul",
  });
  // 최근 다녀온 여행기
  const [recentlyFeeds, setRecentlyFeeds] = useState([]);
  // 오늘의 추천 미식가
  const [recommendUser, setRecommentUser] = useState<RecommendUser[]>([])
  const [filterOpen, setFilterOpen] = useState(false);

  const setFilters = (value: string) => {
    setFilter({
      ...filter,
      region: value,
    });
  };

  const findFeed = async () => {
    try {
      const session = sessionData as unknown as User;
      const creatorId = session.id;
      const { data } = await recentlyFeedApi(creatorId);
      setRecentlyFeeds(data.data);
    } catch (e) {
      console.log(e);
    }
  };

  const findRecommendUser = async () => {
    try {
      const session = sessionData as unknown as User;
      const creatorId = session.id;
      const {data} = await todayRecommendUserApi(creatorId);
      setRecommentUser(data.data);
    } catch (e) {
      console.log(e)
    }
  }

  useEffect(() => {
    if (sessionData) {
      findFeed();
      findRecommendUser();
    }
  }, [sessionData]);

  function FilterButton() {
    return (
      <button
        type={"button"}
        onClick={() => setFilterOpen(!filterOpen)}
        className={styles.filterButton}
      >
        <FlexBox direction={"row"} gap={6}>
          <VscSettings size={14} color={"#8c8c8c"} />
          <Typography color={"gray400"} fontSize={12}>
            필터
          </Typography>
        </FlexBox>
      </button>
    );
  }

  return (
    <div className={styles.homeContainerLayout}>
      <KakaoMap />
      <div className={styles.homeContainer}>
        <FlexBox alignItems={"flex-start"} gap={10}>
          <div className={styles.titleWrapper}>
            <Typography variant="h2">최근 다녀온 여행기</Typography>
          </div>
          {recentlyFeeds.length > 0 ? (
            <CustomHorizontalBar>
            {recentlyFeeds.map((feed, index) => {
              return (
                <div key={`${feed._id}_${index}`}>
                  <ThumbnailCard item={feed} />
                </div>
              );
            })}
          </CustomHorizontalBar>) : (<div className={styles.emptyLabel}><Typography>최근 작성된 미식 기록이 없어요.</Typography></div>)}
        </FlexBox>

        <FlexBox alignItems={"flex-start"} gap={10}>
          <div className={styles.titleWrapper}>
            <Typography variant="h2">오늘의 추천 미식가</Typography>
          </div>
          
          
            {recommendUser.length > 0 ? (
              <CustomHorizontalBar>
                {recommendUser.map((user, index) => {
                  return (
                    <div key={`${crypto.randomUUID()}_${user._id}`}>
                      <FollowCard user={user} />
                    </div>
                  )
                })}
              </CustomHorizontalBar>  
            ) : (<div className={styles.emptyLabel}><Typography>추천 미식가가 없어요.</Typography></div>)}
            
        </FlexBox>
      </div>
      <div
        className={styles.homeListsFilterContainer}
        style={{
          borderColor: !filterOpen ? "#ededed" : "transparent",
        }}
      >
        <Typography variant="h2">여행기</Typography>

        <FilterButton />
      </div>
      <div
        style={{
          display: filterOpen ? "inline-block" : "none",
          borderColor: filterOpen ? "#ededed" : "transparent",
        }}
        className={styles.filterLists}
      >
        <RegionFilter filter={setFilters} />
      </div>

      <div className={styles.feedListsLayout}>
        <FeedCard />
        <FeedCard />
        <FeedCard />
        <FeedCard />
        <FeedCard />
      </div>
    </div>
  );
};
