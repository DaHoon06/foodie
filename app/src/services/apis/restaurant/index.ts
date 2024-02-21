import {axiosInstance} from "@libs/axios";
import {StoreCardItem} from "@components/cards/StoreCard";
import {AxiosResponse} from "axios";

const DOMAIN = `/restaurant`

export const getRestaurantListsApi = async (sort: string): Promise<AxiosResponse<ResponseReturnValue<StoreCardItem[]>>> => {
  return axiosInstance.get(`${DOMAIN}?sort=${sort}`);
}
