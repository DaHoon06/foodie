import * as styles from "./HomeContainer.css";
import { KakaoMap } from "@components/kakao/KakaoMap";
import { FeedCard } from "@components/ui/cards/feeds/FeedCard";
import { Typography } from "@components/common/typography/Typography";
import { ThumbnailCard } from "@components/ui/cards/thumbnail/ThumbnailCard";
import { CustomHorizontalBar } from "@components/ui/nav/CustomHorizontalBar";
import FlexBox from "@components/common/headless/flex-box/FlexBox";
import { FollowCard } from "@components/ui/cards/FollowCard";
import { useState } from "react";
import { RegionFilter } from "@components/filters/RegionFilter";
import { VscSettings } from "react-icons/vsc";

export interface Filter {
  region: string;
}

export const HomeContainer = () => {
  const [filter, setFilter] = useState<Filter>({
    region: "seoul",
  });

  const [filterOpen, setFilterOpen] = useState(false);

  const setFilters = (value: string) => {
    setFilter({
      ...filter,
      region: value,
    });
  };

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
