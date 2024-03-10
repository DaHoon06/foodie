import { ReactElement } from "react";
import * as styles from "./StoreLists.css";
import { StoreCard, StoreCardItem } from "@components/cards/StoreCard";
import { useIntersectionObserver } from "@hooks/useIntersectionObserver";
import { SpinnerUi } from "@components/ui/spinner/SpinnerUi";
import { Filter } from "@containers/HomeContainer";
import { useRestaurantInfinityScroll } from "@services/queries/listQuery";
import { Typography } from "@components/common/typography/Typography";
import FlexBox from "@components/common/headless/flex-box/FlexBox";

interface Props {
  filter: Filter;
}

export const StoreLists = (props: Props): ReactElement => {
  const { filter } = props;

  const {
    data: listQueryData,
    isLoading,
    isError,
    fetchNextPage,
    isFetchingNextPage,
    hasNextPage,
  } = useRestaurantInfinityScroll(filter);

  const { setTarget } = useIntersectionObserver({
    hasNextPage,
    fetchNextPage,
  });

  if (isLoading) return <SpinnerUi isLoading={true} />;

  return (
    <>
      <article className={styles.storeListsLayout}>
        <div className={styles.storeListsContainer}>
          {listQueryData.pages.map(
            (page: { data: StoreCardItem[] }, index: number) => {
              return page.data.length === 0 && index === 0 ? (
                <FlexBox key={crypto.randomUUID()} alignItems="flex-center">
                  <Typography
                    fontWeight={500}
                    fontSize={14}
                    color="gray500"
                    variant="h2"
                  >
                    식당 정보가 없습니다.
                  </Typography>
                </FlexBox>
              ) : (
                <>
                  {page.data.map((store: StoreCardItem, index: number) => {
                    return page.data.length > 0 && store ? (
                      <div key={`${crypto.randomUUID()}_${index}`}>
                        <StoreCard items={store} />
                      </div>
                    ) : (
                      <div>롸</div>
                    );
                  })}
                </>
              );
            }
          )}
        </div>
      </article>
      {isFetchingNextPage ? (
        <SpinnerUi isLoading={true} />
      ) : (
        <div ref={setTarget} />
      )}
    </>
  );
};
