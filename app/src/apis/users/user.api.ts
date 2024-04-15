import {axiosInstance} from "@libs/axios";
import axios, {AxiosRequestConfig, AxiosResponse} from "axios";
import {
  AxiosResponseData,
  axiosResponseData,
} from "@libs/axios/axiosResponse";
import {User} from "@pages/api/auth/[...nextauth]";

const DOMAIN = `/users`;

const IS_PROD = process.env.NODE_ENV === "production";

export const todayRecommendUserApi = async (
  creatorId: string
): Promise<RecommendUserListsApi[] | null> => {
  const url = `${DOMAIN}/recommend/${creatorId}`;
  const {data} = await axiosInstance.get<
    AxiosRequestConfig,
    AxiosResponse<AxiosResponseData<RecommendUserListsApi[]>>
  >(url);
  return axiosResponseData<RecommendUserListsApi[]>(data);
};

export const userCheckApi = async (user: User) => {
  const BASE_URL =
    process.env.NODE_ENV === "production"
      ? process.env.NEXT_PUBLIC_PRODUCTION_API_URL
      : process.env.NEXT_PUBLIC_LOCAL_API_URL;
  return axios.post(`${BASE_URL}/api${DOMAIN}/checked`, user);
};
