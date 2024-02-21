import {QueryCache, QueryClient} from "@tanstack/react-query";

const queryErrorHandler = (error: unknown): void => {
  const message = error instanceof Error ? error.message : "ERROR MESSAGE";
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
