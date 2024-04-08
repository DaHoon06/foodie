import {FeedFilter} from "@interfaces/feeds/feed.filter";
import {useFeedListsInfinityScroll} from "@services/queries/feeds/useFeedListsQuery";
import {useIntersectionObserver} from "@hooks/useIntersectionObserver";
import {SpinnerUi} from "@components/ui";
import * as styles from './FeedLists.css';
import FlexBox from "@components/common/headless/flex-box/FlexBox";
import {Typography} from "@components/common/typography/Typography";
import {FeedListsState} from "@interfaces/feeds/feed.lists";
import {FeedCard} from "@components/ui/cards/feeds/FeedCard";

interface Props {
  filter: FeedFilter;
}

export const FeedLists = (props: Props) => {
  const {filter} = props;

  const { data: listQueryData,
    isLoading,
    isError,
    fetchNextPage,
    isFetchingNextPage,
    hasNextPage} = useFeedListsInfinityScroll(filter);

  const { setTarget } = useIntersectionObserver({
    hasNextPage,
    fetchNextPage,
  });

  if (isLoading) return <SpinnerUi isLoading={true} />;

  return (
    <>
      <article className={styles.feedListsLayout}>
        {listQueryData.pages.map(
          (page: FeedListsState[], index: number) => {
            return page.length === 0 && index === 0 ? (
              <FlexBox  className={styles.emptyLabel} key={`${crypto.randomUUID()}_${index}_lists`} alignItems="flex-center">
                <Typography
                  fontWeight={500}
                  fontSize={14}
                  color="gray500"
                  variant="h2"
                >
                  추천 미식가가 없어요.
                </Typography>
              </FlexBox>
            ) : (
              <>
                {page.map((feed: FeedListsState, index: number) => {
                  return page.length > 0 && feed ? (
                    <div key={`${crypto.randomUUID()}_${index}`}>
                      <FeedCard feedCard={feed} />
                    </div>
                  ) : (
                    <div className={styles.emptyLabel}><Typography>추천 미식가가 없어요.</Typography></div>
                  );
                })}
              </>
            );
          }
        )}
      </article>
      {isFetchingNextPage ? (
        <SpinnerUi isLoading={true} />
      ) : (
        <div ref={setTarget} />
      )}
    </>
  )
}