import { axiosInstance } from "@libs/axios";
import { StoreCardItem } from "@components/cards/StoreCard";
import { AxiosResponse } from "axios";
import { Filter } from "@containers/HomeContainer";

const DOMAIN = `/restaurant`;

export const getRestaurantListsApi = async (
  filter: Filter,
  page: { pageParam: number }
): Promise<AxiosResponse<ResponseReturnValue<StoreCardItem[]>>> => {
  const { region, sort } = filter;
  const url = `${DOMAIN}/lists?page=${page.pageParam}&sort=${sort}&region=${region}`
  return axiosInstance.get(url);
};
