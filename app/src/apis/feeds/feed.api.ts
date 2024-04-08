import {axiosInstance} from "@libs/axios";
import {FeedPostBody} from "@interfaces/feeds/feedPost";

const DOMAIN = `/feeds`;

export const feedSubmitApi = async (body: FeedPostBody) => {
  return axiosInstance.post(DOMAIN, body);
};

export const recentlyFeedApi = async (creatorId: string) => {
  const url = `${DOMAIN}/recently/${creatorId}`;
  return axiosInstance.get(url);
};

export const feedListsApi = async () => {
  const url = `${DOMAIN}/lists`;
  return axiosInstance.get(url);
}
