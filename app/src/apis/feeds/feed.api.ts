import {axiosInstance} from "@libs/axios";
import {FeedPostBody} from "@interfaces/feeds/feed.post";
import {AxiosRequestConfig, AxiosResponse} from "axios";
import {FeedListsStateApi, RecentlyFeedListsStateApi} from "@apis/feeds/interfaces/feed";
import {AxiosResponseData, axiosResponseData} from "@libs/axios/axiosResponse";

const DOMAIN = `/feeds`;

export const feedSubmitApi = async (body: FeedPostBody) => {
  return axiosInstance.post(DOMAIN, body);
};

export const recentlyFeedApi = async (creatorId: string): Promise<RecentlyFeedListsStateApi[] | null> => {
  const url = `${DOMAIN}/recently/${creatorId}`;
  const {data} = await axiosInstance.get<AxiosRequestConfig, AxiosResponse<AxiosResponseData<RecentlyFeedListsStateApi[]>>>(url);
  return axiosResponseData<RecentlyFeedListsStateApi[]>(data);
};

export const feedListsApi = async (): Promise<FeedListsStateApi[] | null> => {
  const url = `${DOMAIN}/lists`;
  const {data} = await axiosInstance.get<AxiosRequestConfig, AxiosResponse<AxiosResponseData<FeedListsStateApi[]>>>(url)
  return axiosResponseData<FeedListsStateApi[]>(data);
}
