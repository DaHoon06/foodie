import {axiosInstance} from "@libs/axios";
import {AxiosRequestConfig, AxiosResponse} from "axios";
import {AxiosResponseData, axiosResponseData} from "@libs/axios/axiosResponse";

const DOMAIN = `/users`;

export const todayRecommendUserApi = async (creatorId: string): Promise<RecommendUserListsApi[] | null> => {
  const url = `${DOMAIN}/recommend/${creatorId}`;
  const {data} = await axiosInstance.get<AxiosRequestConfig, AxiosResponse<AxiosResponseData<RecommendUserListsApi[]>>>(url);
  return axiosResponseData<RecommendUserListsApi[]>(data);
}