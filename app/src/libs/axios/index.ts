import axios, {
  AxiosInstance,
  AxiosRequestConfig,
  AxiosResponse,
  AxiosStatic,
} from "axios";

const BASE_URL =
  process.env.NODE_ENV === "production"
    ? process.env.NEXT_PUBLIC_PRODUCTION_API_URL
    : process.env.NEXT_PUBLIC_LOCAL_API_URL;

const baseURL = `${BASE_URL}/api`;
const instance: AxiosInstance = axios.create({
  baseURL,
  headers: {
    "Content-Type": "application/json",
  },
  timeout: 20000,
  withCredentials: true,
});

export interface RequestConfig extends AxiosRequestConfig {
  suppressStatusCode?: number[];
}

function AxiosAuthInterceptor<T>(response: AxiosResponse<T>): AxiosResponse {
  return response;
}

instance.interceptors.request.use((config) => {
  // config.headers["Content-type"] = "application/json; charset=UTF-8";
  // config.headers["Accept"] = "application/json";
  return config;
});

export const axiosInstance = instance as AxiosStatic;
