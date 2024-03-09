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
  console.log(filter, page);
  return axiosInstance.get(
    `${DOMAIN}/lists?page=${page.pageParam}&sort=${sort}&region=${region}`
  );
};
