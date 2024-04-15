import {axiosInstance} from "@libs/axios";
import {FeedPostBody} from "@interfaces/feeds/feed.post";
import {AxiosRequestConfig, AxiosResponse} from "axios";
import {FeedListsStateApi, RecentlyFeedListsStateApi} from "@apis/feeds/interfaces/feed";
import {AxiosResponseData, axiosResponseData} from "@libs/axios/axiosResponse";
import {FeedFilter} from "@interfaces/feeds/feed.filter";

const DOMAIN = `/feeds`;

export const feedSubmitApi = async (body: FeedPostBody) => {
  return axiosInstance.post(DOMAIN, body);
};

export const recentlyFeedApi = async (creatorId: string): Promise<RecentlyFeedListsStateApi[] | null> => {
  if (!creatorId) return null;
  const url = `${DOMAIN}/recently/${creatorId}`;
  const {data} = await axiosInstance.get<AxiosRequestConfig, AxiosResponse<AxiosResponseData<RecentlyFeedListsStateApi[]>>>(url);
  return axiosResponseData<RecentlyFeedListsStateApi[]>(data);
};

export const feedListsApi = async (filter: FeedFilter, {pageParam}: {
  pageParam: number
}): Promise<FeedListsStateApi[] | null> => {

  let page = 1;
  if (!isNaN(pageParam)) page = pageParam;

  const url = `${DOMAIN}/lists?region=${filter.sido}&page=${page}`;
  const {data} = await axiosInstance.get<AxiosRequestConfig, AxiosResponse<AxiosResponseData<FeedListsStateApi[]>>>(url)
  return axiosResponseData<FeedListsStateApi[]>(data);
}
