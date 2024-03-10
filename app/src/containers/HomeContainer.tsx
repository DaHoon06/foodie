import * as styles from "./HomeContainer.css";
import { Carousel } from "@components/ui/carousel/CarouselUi";
import { StoreLists } from "@components/lists/StoreLists";
import { VscSettings } from "react-icons/vsc";
import { SelectBox } from "@components/common/select-box";
import FlexBox from "@components/common/headless/flex-box/FlexBox";
import { useState } from "react";
import { Typography } from "@components/common/typography/Typography";
import { RegionFilter } from "@components/filters/RegionFilter";

const selectOptions = [
  { id: "1", key: "grade", label: "평점순" },
  { id: "2", key: "review", label: "리뷰순" },
  { id: "3", key: "view", label: "조회순" },
];

export interface Filter {
  sort: string;
  region: string;
}

export const HomeContainer = () => {
  const [filter, setFilter] = useState<Filter>({
    sort: "grade",
    region: "seoul",
  });
  const [filterOpen, setFilterOpen] = useState(false);

  const onChangeSelectBox = (payload: string) => {
    const index = selectOptions.findIndex((v) => v.label === payload);
    setFilter({
      ...filter,
      sort: selectOptions[index].key,
    });
  };

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
      <Carousel />
      <div
        className={styles.homeListsFilterContainer}
        style={{
          borderColor: !filterOpen ? "#ededed" : "transparent",
        }}
      >
        <SelectBox items={selectOptions} onChange={onChangeSelectBox} />

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
      <StoreLists filter={filter} />
    </div>
  );
};
