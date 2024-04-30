import {queryClient} from "@libs/tanstack";
import {queryKeys} from "@services/keys/queryKeys";
import {feedListsApi} from "@apis/feeds/feed.api";
import {FeedFilter} from "@interfaces/feeds/feed.filter";
import {useInfiniteQuery, useQuery} from "@tanstack/react-query";
import {AxiosError} from "axios";

export const prefetchingFeedLists = async (filter: FeedFilter, page: { pageParam: number }) => {
  await queryClient.prefetchQuery(
    [queryKeys.feeds.lists, filter, page],
    () => feedListsApi(filter, page),
  );
};

export const useFeedListsQuery = async (filter: FeedFilter, page: { pageParam: number }) => {
  return useQuery(
    [queryKeys.feeds.lists, filter, page],
    () => feedListsApi(filter, page).catch((e) => {
      const error = e as unknown as AxiosError;
      if (error.response && error.response.data) {
        const {statusCode, message} = error.response.data as {
          statusCode: number;
          message: string;
        };
        if (statusCode === 404) {
          return null;
        }
      }
    }).then((res) => res),
    {
      staleTime: 60 * 1000,
      cacheTime: 5 * 60 * 1000, // 1 분
      keepPreviousData: true,
      refetchOnWindowFocus: false,
      useErrorBoundary: false,
    }
  )
}

export const useFeedListsInfinityScroll = (filter: FeedFilter) => {
  return useInfiniteQuery(
    [queryKeys.feeds.lists, filter],
    ({pageParam = 1}) => feedListsApi(filter, {pageParam}).catch(e => {
      const error = e as unknown as AxiosError;
      if (error.response && error.response.data) {
        const {statusCode, message} = error.response.data as {
          statusCode: number;
          message: string;
        };
        if (statusCode === 404) {
          return null;
        }
      }
    }),
    {
      getNextPageParam: (lastPage, allPages) => {
        const nextPage = allPages.length + 1;
        return lastPage.length === 0 ? undefined : nextPage;
      },
      select: (data) => ({
        pages: data?.pages,
        pageParams: data.pageParams,
      }),
      staleTime: 60 * 1000,
      cacheTime: 5 * 60 * 1000, // 1 분
      keepPreviousData: true,
      refetchOnWindowFocus: false,
      useErrorBoundary: false,
    }
  )
}
