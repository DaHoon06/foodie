import * as styles from "./HomeContainer.css";
import {KakaoMap} from "@components/kakao/maps/KakaoMap";
import {Typography} from "@components/common/typography/Typography";
import {ThumbnailCard} from "@components/ui/cards/ThumbnailCard";
import {CustomHorizontalBar} from "@components/nav/CustomHorizontalBar";
import FlexBox from "@components/common/headless/flex-box/FlexBox";
import {FollowCard} from "@components/ui/cards/FollowCard";
import {useEffect, useState} from "react";
import {RegionFilter} from "@components/filters/RegionFilter";
import {VscSettings} from "react-icons/vsc";
import {recentlyFeedApi} from "@apis/feeds/feed.api";
import {todayRecommendUserApi} from "@apis/users/user.api";
import {FeedFilter} from "@interfaces/feeds/feed.filter";
import {RecentlyFeedListsState} from "@interfaces/feeds/feed.lists";
import {RecommendUserLists} from "@interfaces/users/user.lists";
import {FeedLists} from "@components/feeds/FeedLists";
import {useAuth} from "@providers/AuthProvider";
import {Skeleton} from "@components/ui/skeleton/Skeleton";
import Link from "next/link";

export const HomeContainer = () => {
  const {userId, isLogin} = useAuth();
  const [pending, setPending] = useState(true);
  const [filter, setFilter] = useState<FeedFilter>({
    sido: "전체",
  });
  // 최근 다녀온 여행기
  const [recentlyFeeds, setRecentlyFeeds] = useState<RecentlyFeedListsState[]>(
    []
  );
  // 오늘의 추천 미식가
  const [recommendUser, setRecommendUser] = useState<RecommendUserLists[]>([]);

  const [filterOpen, setFilterOpen] = useState(false);

  const setFilters = (value: string) => {
    setFilter({
      ...filter,
      sido: value,
    });
  };

  const findFeed = async () => {
    try {
      const data = await recentlyFeedApi(userId);
      if (data) setRecentlyFeeds(data);
    } catch (e) {
      console.log(e);
    }
  };

  const findRecommendUser = async () => {
    try {
      const data = await todayRecommendUserApi(userId);
      if (data) setRecommendUser(data);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    setPending(true);
    all();
    if (typeof window !== "undefined" && !isLogin && userId) {
      setPending(false);
    }
  }, [isLogin, userId]);

  const all = async () => {
    setPending(true);
    try {
      await findFeed();
      await findRecommendUser();
      setPending(false);
    } catch (e) {
      console.log(e);
    }
  };

  function FilterButton() {
    return (
      <button
        type={"button"}
        onClick={() => setFilterOpen(!filterOpen)}
        className={styles.filterButton}
      >
        <FlexBox direction={"row"} gap={6}>
          <VscSettings size={14} color={"#8c8c8c"}/>
          <Typography color={"gray400"} fontSize={12}>
            필터
          </Typography>
        </FlexBox>
      </button>
    );
  }

  return (
    <div className={styles.homeContainerLayout}>
      <KakaoMap/>
      <div className={styles.homeContainer}>
        <FlexBox
          className={styles.recentlyFeedContainer}
          alignItems={"flex-start"}
        >
          <div className={styles.titleWrapper}>
            <Typography variant="h2" fontWeight={600} color={"black100"}>
              최근 다녀온 여행기
            </Typography>
          </div>
          {pending ? (
            <CustomHorizontalBar>
              <div>
                <FlexBox gap={8} direction="row">
                  <div style={{width: "210px", height: "220px"}}>
                    <Skeleton width={210} height={200} isLoading={true}/>
                  </div>
                  <div style={{width: "210px", height: "220px"}}>
                    <Skeleton width={210} height={200} isLoading={true}/>
                  </div>
                  <div style={{width: "210px", height: "220px"}}>
                    <Skeleton width={210} height={200} isLoading={true}/>
                  </div>
                  <div style={{width: "210px", height: "220px"}}>
                    <Skeleton width={210} height={200} isLoading={true}/>
                  </div>
                  <div style={{width: "210px", height: "220px"}}>
                    <Skeleton width={210} height={200} isLoading={true}/>
                  </div>
                </FlexBox>
              </div>
            </CustomHorizontalBar>
          ) : (
            <>
              {recentlyFeeds.length > 0 ? (
                <CustomHorizontalBar>
                  {recentlyFeeds.map((feed) => {
                    return (
                      <Link
                        href={`/feeds/${feed.id}`}
                        key={crypto.randomUUID()}
                      >
                        <ThumbnailCard item={feed}/>
                      </Link>
                    );
                  })}
                </CustomHorizontalBar>
              ) : (
                <div className={styles.emptyLabel}>
                  <Typography>최근 작성된 미식 기록이 없어요.</Typography>
                </div>
              )}
            </>
          )}
        </FlexBox>

        <FlexBox className={styles.userContainer} alignItems={"flex-start"}>
          <div className={styles.titleWrapper}>
            <Typography variant="h2" fontWeight={600} color={"black100"}>
              오늘의 추천 미식가
            </Typography>
          </div>
          {pending ? (
            <CustomHorizontalBar>
              <div>
                <FlexBox gap={8} direction="row">
                  <div style={{width: "140px", height: "210px"}}>
                    <Skeleton width={140} height={210} isLoading={true}/>
                  </div>
                  <div style={{width: "140px", height: "210px"}}>
                    <Skeleton width={140} height={210} isLoading={true}/>
                  </div>
                  <div style={{width: "140px", height: "210px"}}>
                    <Skeleton width={140} height={210} isLoading={true}/>
                  </div>
                  <div style={{width: "140px", height: "210px"}}>
                    <Skeleton width={140} height={210} isLoading={true}/>
                  </div>
                  <div style={{width: "140px", height: "210px"}}>
                    <Skeleton width={140} height={210} isLoading={true}/>
                  </div>
                </FlexBox>
              </div>
            </CustomHorizontalBar>
          ) : (
            <>
              {recommendUser.length > 0 ? (
                <CustomHorizontalBar>
                  {recommendUser.map((user, index) => {
                    return (
                      <div key={`${crypto.randomUUID()}`}>
                        <FollowCard user={user}/>
                      </div>
                    );
                  })}
                </CustomHorizontalBar>
              ) : (
                <div className={styles.emptyLabel}>
                  <Typography>추천 미식가가 없어요.</Typography>
                </div>
              )}
            </>
          )}
        </FlexBox>
      </div>
      <div
        className={styles.homeListsFilterContainer}
        style={{
          borderColor: !filterOpen ? "#ededed" : "transparent",
        }}
      >
        <Typography variant="h2" fontWeight={600} color={"black100"}>
          미식가 여행기
        </Typography>
        <FilterButton/>
      </div>
      <div
        style={{
          display: filterOpen ? "inline-block" : "none",
          borderColor: filterOpen ? "#ededed" : "transparent",
        }}
        className={styles.filterLists}
      >
        <RegionFilter filter={setFilters}/>
      </div>
      <FeedLists filter={filter}/>
    </div>
  );
};
