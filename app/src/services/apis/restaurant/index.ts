import {axiosInstance} from "@libs/axios";
import {StoreCardItem} from "@components/cards/StoreCard";
import {AxiosResponse} from "axios";

const DOMAIN = `/restaurant`

export const getRestaurantListsApi = async (sort: string, page: {pageParam: number}): Promise<AxiosResponse<ResponseReturnValue<StoreCardItem[]>>> => {
  return axiosInstance.get(`${DOMAIN}?page=${page.pageParam}`);
}
