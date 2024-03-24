import { useInfiniteQuery, useQuery } from "@tanstack/react-query";
import { queryKeys } from "@services/keys/queryKeys";
import { getRestaurantListsApi } from "@apis/restaurant";
import { queryClient } from "@libs/tanstack";
import { AxiosError, AxiosResponse } from "axios";
import { StoreCardItem } from "@components/ui/cards/StoreCard";
import { Filter } from "@containers/HomeContainer";

export const prefetchingRestaurantList = async (
  filter: Filter,
  page: { pageParam: number }
) => {
  queryClient.prefetchQuery(
    [queryKeys.lists.restaurantLists, filter, page],
    () => getRestaurantListsApi(filter, page)
  );
};

export const useRestaurantQuery = (
  filter: Filter,
  page: { pageParam: number }
) => {
  return useQuery<
    unknown,
    AxiosError,
    ResponseReturnValue<{ data: StoreCardItem[] }>
  >(
    [queryKeys.lists.restaurantLists, filter, page],
    () =>
      getRestaurantListsApi(filter, page).catch((e) => {
        //todo: error handling
        const error = e as unknown as AxiosError;
        if (error.response && error.response.data) {
          const { statusCode, message } = error.response.data as {
            statusCode: number;
            message: string;
          };
          if (statusCode === 404) {
            console.log(message);
          }
        }
      }),
    {
      keepPreviousData: true,
      useErrorBoundary: false,
    }
  );
};

/**
 * @param filter 정렬 / 지역
 * @description 식당 리스트 인피니티 스크롤 쿼리
 */
export const useRestaurantInfinityScroll = (filter: Filter) =>
  useInfiniteQuery<
    AxiosResponse,
    AxiosError,
    ResponseReturnValue<StoreCardItem[]>
  >(
    [queryKeys.lists.restaurantLists, filter],
    ({ pageParam = 1 }) => getRestaurantListsApi(filter, { pageParam }),
    {
      getNextPageParam: (lastPage, allPages) => {
        const nextPage = allPages.length + 1;
        return lastPage.data.data.length === 0 ? undefined : nextPage;
      },
      select: (data) => ({
        pages: data?.pages.flatMap((page) => page.data),
        pageParams: data.pageParams,
      }),
      keepPreviousData: true,
      staleTime: 60 * 10000,
      cacheTime: 60 * 10000,
    }
  );
