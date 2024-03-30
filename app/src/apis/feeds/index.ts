import { axiosInstance } from "@libs/axios";
import { FeedPostBody } from "@interfaces/feeds/feedPost";

const DOMAIN = `/feeds`;

export const feedSubmitApi = async (body: FeedPostBody) => {
  return axiosInstance.post(DOMAIN, body);
};
