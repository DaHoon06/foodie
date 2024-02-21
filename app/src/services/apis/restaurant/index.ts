import {axiosInstance} from "@libs/axios";

const DOMAIN = `/restaurant`

export const allRestaurantListsApi = async () => {
  console.log('IN')
  return axiosInstance.get(`${DOMAIN}`);
}