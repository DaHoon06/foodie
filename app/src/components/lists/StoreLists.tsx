import {ReactElement} from "react";
import * as styles from './StoreLists.css';
import {StoreCard, StoreCardItem} from "@components/cards/StoreCard";
import {useInfiniteQuery} from "@tanstack/react-query";
import {AxiosError, AxiosResponse} from "axios";
import {queryKeys} from "@services/keys/queryKeys";
import {getRestaurantListsApi} from "@services/apis/restaurant";
import {useIntersectionObserver} from "@hooks/useIntersectionObserver";

interface Props {
  sort: string;
}

export const StoreLists = (props: Props): ReactElement => {
  const {sort} = props;

  const {
    data: listQueryData,
    isLoading,
    fetchNextPage,
    hasNextPage
  } = useInfiniteQuery<AxiosResponse, AxiosError, ResponseReturnValue<{ data: StoreCardItem[] }>>(
    [queryKeys.lists.restaurantLists],
    ({pageParam = 1}) => getRestaurantListsApi(sort, {pageParam}),
    {
      getNextPageParam: (lastPage, allPages) => {
        const nextPage = allPages.length + 1;
        return lastPage.data.length === 0 ? undefined : nextPage;
      },
      select: (data) => ({
        pages: data?.pages.flatMap((page) => page.data),
        pageParams: data.pageParams
      })
    }
  )

  // const {data: listQueryData, isLoading} = useRestaurantQuery(sort);
  // useEffect(() => {
  //   prefetchingRestaurantList().then();
  // }, []);

  const {setTarget} = useIntersectionObserver({
    hasNextPage,
    fetchNextPage,
  });

  if (isLoading) return <div>...isLoading</div>
  //todo: 데이터가 없을 경우에 대한 처리 필요
  if (!listQueryData) return <div>데이터가 존재하지 않습니다.</div>

  return (
    <>
      <article className={styles.storeListsLayout}>
        <div className={styles.storeListsContainer}>
          {listQueryData.data.data.map((store: StoreCardItem, index: number) => {
            return (
              <div key={index}>
                <StoreCard
                  items={store}
                />
              </div>
            )
          })}
        </div>
      </article>
      <div ref={setTarget}/>
    </>

  )
}
