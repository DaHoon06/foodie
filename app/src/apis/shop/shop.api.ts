import {axiosInstance} from "@libs/axios";
import {AxiosRequestConfig, AxiosResponse} from "axios";
import {Marker} from "@apis/shop/interfaces/map";
import {AxiosResponseData, axiosResponseData} from "@libs/axios/axiosResponse";

const DOMAIN = `/shop`;

export const getMarkerApi = async (creatorId: string): Promise<Marker[] | null> => {
  if (!creatorId) return null;
  const url = `${DOMAIN}/marker/${creatorId}`;
  const {data} = await axiosInstance.get<AxiosRequestConfig, AxiosResponse<AxiosResponseData<Marker[]>>>(url);
  return axiosResponseData<Marker[]>(data);
}
