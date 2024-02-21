import {axiosInstance} from "@libs/axios";

const DOMAIN = `/restaurant`

export const allRestaurantListsApi = async () => {
  return axiosInstance.get(`${DOMAIN}`);
}