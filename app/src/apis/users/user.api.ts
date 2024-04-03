import {axiosInstance} from "@libs/axios";

const DOMAIN = `/users`;

export const todayRecommendUserApi = (creatorId: string) => {
  const url = `${DOMAIN}/recommend/${creatorId}`;
  return axiosInstance.get(url);
}