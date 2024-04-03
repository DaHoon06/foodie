import {axiosInstance} from "@libs/axios";

const DOMAIN = `/shop`;

export const getMarkerApi = (creatorId: string) => {
  const url = `${DOMAIN}/marker/${creatorId}`;
  return axiosInstance.get(url);
}