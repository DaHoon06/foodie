import { FeedFilter } from "@interfaces/feeds/feed.filter";
import { useFeedListsInfinityScroll } from "@services/queries/feeds/useFeedListsQuery";
import { useIntersectionObserver } from "@hooks/useIntersectionObserver";
import { SpinnerUi } from "@components/ui";
import * as styles from "./styles/FeedLists.css";
import FlexBox from "@components/common/headless/flex-box/FlexBox";
import { Typography } from "@components/common/typography/Typography";
import { FeedListsState } from "@interfaces/feeds/feed.lists";
import { FeedCard } from "@components/ui/cards/FeedCard";

interface Props {
  filter: FeedFilter;
}

export const FeedLists = (props: Props) => {
  const { filter } = props;

  const {
    data: listQueryData,
    isLoading,
    fetchNextPage,
    isFetchingNextPage,
    hasNextPage,
  } = useFeedListsInfinityScroll(filter);

  const { setTarget } = useIntersectionObserver({
    hasNextPage,
    fetchNextPage,
  });

  if (isLoading) return <SpinnerUi isLoading={true} />;

  return (
    <>
      <section className={styles.feedListsLayout}>
        {listQueryData?.pages.map((page: FeedListsState[], index: number) => {
          return page.length === 0 && index === 0 ? (
            <FlexBox
              className={styles.emptyLabel}
              key={`${crypto.randomUUID()}_${index}_lists`}
              alignItems="flex-center"
            >
              <Typography
                fontWeight={500}
                fontSize={14}
                color="gray500"
                variant="h2"
              >
                작성된 게시글이 없습니다.
              </Typography>
            </FlexBox>
          ) : (
            <div key={`${crypto.randomUUID()}_${index}_lists`}>
              {page.map((feed: FeedListsState, index: number) => {
                return page.length > 0 && feed ? (
                  <div
                    className={styles.feedCardWrapper}
                    key={`${crypto.randomUUID()}_${index}`}
                  >
                    <FeedCard feedCard={feed} />
                  </div>
                ) : (
                  <div className={styles.emptyLabel}>
                    <Typography
                      fontWeight={500}
                      fontSize={14}
                      color="gray500"
                      variant="h2"
                    >
                      {" "}
                      작성된 게시글이 없습니다.
                    </Typography>
                  </div>
                );
              })}
            </div>
          );
        })}
      </section>
      {isFetchingNextPage ? (
        <SpinnerUi isLoading={true} />
      ) : (
        <div ref={setTarget} />
      )}
    </>
  );
};
