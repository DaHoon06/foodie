import {ReactElement} from "react";
import * as styles from './StoreLists.css';
import {StoreCard, StoreCardItem} from "@components/cards/StoreCard";
import {useInfiniteQuery} from "@tanstack/react-query";
import {AxiosError, AxiosResponse} from "axios";
import {queryKeys} from "@services/keys/queryKeys";
import {getRestaurantListsApi} from "@services/apis/restaurant";
import {useIntersectionObserver} from "@hooks/useIntersectionObserver";
import {list} from "postcss";
import {SpinnerUi} from "@components/ui/spinner/SpinnerUi";

interface Props {
  sort: string;
}

export const StoreLists = (props: Props): ReactElement => {
  const {sort} = props;

  const {
    data: listQueryData,
    isLoading,
    isError,
    fetchNextPage,
    isFetchingNextPage,
    hasNextPage
  } = useInfiniteQuery<AxiosResponse, AxiosError, ResponseReturnValue<StoreCardItem[]>>(
    [queryKeys.lists.restaurantLists],
    ({pageParam = 1}) => getRestaurantListsApi(sort, {pageParam}),
    {
      getNextPageParam: (lastPage, allPages) => {
        const nextPage = allPages.length + 1;
        return lastPage.data.data.length === 0 ? undefined : nextPage;
      },
      select: (data) => ({
        pages: data?.pages.flatMap((page) => page.data),
        pageParams: data.pageParams
      }),
      keepPreviousData: true,
      staleTime: 60 * 10000,
      cacheTime: 60 * 10000,
    }
  )

  const {setTarget} = useIntersectionObserver({
    hasNextPage,
    fetchNextPage,
  });

  if (isLoading) return <div>...isLoading</div>

  if (isError) return <div>...isError</div>

  return (
    <>
      <article className={styles.storeListsLayout}>
        <div className={styles.storeListsContainer}>
          {listQueryData.pages.map((page: {data: StoreCardItem[]}, index) => {
            return (
              <>
                {page.data.map((store: StoreCardItem) => {
                  return (
                    <div key={crypto.randomUUID()}>
                      <StoreCard
                        items={store}
                      />
                    </div>
                  )
                })}
              </>
            )
          })}

        </div>
      </article>

      {!isFetchingNextPage ? (<SpinnerUi isLoading={true} />) : (<div ref={setTarget}/>)}
    </>

  )
}
