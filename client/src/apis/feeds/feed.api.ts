import { axiosInstance } from "@libs/axios";
import { FeedPostBody } from "@interfaces/feeds/feed.post";
import { AxiosRequestConfig, AxiosResponse } from "axios";
import {
  FeedListsStateApi,
  RecentlyFeedListsStateApi,
} from "@apis/feeds/interfaces/feed";
import {
  AxiosResponseData,
  axiosResponseData,
} from "@libs/axios/axiosResponse";
import { FeedFilter } from "@interfaces/feeds/feed.filter";

const FEEDS = `/feeds`;

export const feedSubmitApi = async (body: FeedPostBody) => {
  return axiosInstance.post(FEEDS, body);
};

export const recentlyFeedApi = async (
  creatorId: string
): Promise<RecentlyFeedListsStateApi[] | null> => {
  if (!creatorId) return null;
  const url = `${FEEDS}/recently/${creatorId}`;
  const { data } = await axiosInstance.get<
    AxiosRequestConfig,
    AxiosResponse<AxiosResponseData<RecentlyFeedListsStateApi[]>>
  >(url);
  return axiosResponseData<RecentlyFeedListsStateApi[]>(data);
};

export const feedListsApi = async (
  filter: FeedFilter,
  {
    pageParam,
  }: {
    pageParam: number;
  }
): Promise<FeedListsStateApi[] | null> => {
  let page = 1;
  if (!isNaN(pageParam)) page = pageParam;

  const url = `${FEEDS}/lists?region=${filter.sido}&page=${page}`;
  const { data } = await axiosInstance.get<
    AxiosRequestConfig,
    AxiosResponse<AxiosResponseData<FeedListsStateApi[]>>
  >(url);
  return axiosResponseData<FeedListsStateApi[]>(data);
};

export const feedDetailApi = async (
  feedId: string
): Promise<FeedListsStateApi> => {
  const url = `${FEEDS}/detail/${feedId}`;
  const { data } = await axiosInstance.get<
    AxiosRequestConfig,
    AxiosResponse<AxiosResponseData<FeedListsStateApi>>
  >(url);
  return axiosResponseData<FeedListsStateApi>(data);
};

export const feedDetailWithCommentApi = async (
  feedId: string
): Promise<FeedListsStateApi> => {
  const url = `${FEEDS}/detail/with-comment/${feedId}`;
  const { data } = await axiosInstance.get<
    AxiosRequestConfig,
    AxiosResponse<AxiosResponseData<FeedListsStateApi>>
  >(url);
  return axiosResponseData<FeedListsStateApi>(data);
};

export const myFeedListApi = async ({
  pageParam,
}: {
  pageParam: number;
}): Promise<FeedListsStateApi[] | null> => {
  let page = 1;
  if (!isNaN(pageParam)) page = pageParam;

  const url = `${FEEDS}/my-list?page=${page}`;
  const { data } = await axiosInstance.get<
    AxiosRequestConfig,
    AxiosResponse<AxiosResponseData<FeedListsStateApi[]>>
  >(url);
  return axiosResponseData<FeedListsStateApi[]>(data);
};
