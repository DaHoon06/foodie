import { axiosInstance } from "@libs/axios";
import axios, { AxiosRequestConfig, AxiosResponse } from "axios";
import {
  AxiosResponseData,
  axiosResponseData,
} from "@libs/axios/axiosResponse";
import { User } from "@pages/api/auth/[...nextauth]";
import {
  RecommendUserListsApi,
  UserProfileUpdateBody,
} from "@apis/users/interfaces/user";

const DOMAIN = `/users`;

const IS_PROD = process.env.NODE_ENV === "production";

export const todayRecommendUserApi = async (
  creatorId?: string
): Promise<RecommendUserListsApi[] | null> => {
  let url = `${DOMAIN}/recommend`;
  if (creatorId) url += `?id=${creatorId}`;

  const { data } = await axiosInstance.get<
    AxiosRequestConfig,
    AxiosResponse<AxiosResponseData<RecommendUserListsApi[]>>
  >(url);
  return axiosResponseData<RecommendUserListsApi[]>(data);
};

export const userCheckApi = async (user: User) => {
  const BASE_URL = IS_PROD
    ? process.env.NEXT_PUBLIC_PRODUCTION_API_URL
    : process.env.NEXT_PUBLIC_LOCAL_API_URL;
  return axios.post(`${BASE_URL}/api${DOMAIN}/checked`, user);
};

export const getUserProfileApi = async (id: string) => {
  const url = `${DOMAIN}/profile/${id}`;
  const { data } = await axiosInstance.get(url);
  return data;
};

/**
 * @description user profile update
 * @param body
 */
export const profileUpdateApi = async (body: UserProfileUpdateBody) => {
  const url = `${DOMAIN}/profile`;
  const { data } = await axiosInstance.patch(url, body);
  return data;
};
