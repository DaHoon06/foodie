import {axiosInstance} from "@libs/axios";
import {StoreCardItem} from "@components/cards/StoreCard";

const DOMAIN = `/restaurant`

export const getRestaurantListsApi = async (): Promise<ResponseReturnValue<StoreCardItem[]>> => {
  return axiosInstance.get(`${DOMAIN}`);
}