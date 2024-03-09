import {axiosInstance} from "@libs/axios";
import {StoreCardItem} from "@components/cards/StoreCard";
import {AxiosResponse} from "axios";
import { Filter } from "@containers/HomeContainer";

const DOMAIN = `/restaurant`

export const getRestaurantListsApi = async (sort: Filter, page: {pageParam: number}): Promise<AxiosResponse<ResponseReturnValue<StoreCardItem[]>>> => {
  return axiosInstance.get(`${DOMAIN}?page=${page.pageParam}`);
}
