import { QueryCache, QueryClient } from "@tanstack/react-query";
import { AxiosError } from "axios";
import { signOut } from "next-auth/react";

const unAuthorization = async () => {
  await signOut();
};

const removeCookie = () => {
  const isProd = process.env.NODE_ENV !== "development";
  const domain = isProd
    ? process.env.NEXT_PUBLIC_PROD
    : process.env.NEXT_PUBLIC_LOCAL;
  const path = "/";
  document.cookie =
    name +
    "=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=" +
    path +
    "; domain=" +
    domain +
    ";";
};

const queryErrorHandler = async (error: unknown): Promise<void> => {
  const isAxiosError = error instanceof AxiosError;

  if (isAxiosError) {
    if (error.response) {
      const { status } = error.response;
      if (status === 401) {
      }
    }
  }
};

export const queryClient = new QueryClient({
  queryCache: new QueryCache({
    onError: queryErrorHandler,
  }),
  defaultOptions: {
    queries: {
      retry: 1,
      useErrorBoundary: true,
      staleTime: 10000, // 10 초 이내 캐시된 결과를 사용
      cacheTime: 60 * 1000, // 캐시 1 분
    },
    mutations: {
      useErrorBoundary: true,
    },
  },
});
