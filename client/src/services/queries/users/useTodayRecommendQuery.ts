import { todayRecommendUserApi } from "@apis/users/user.api";
import { queryKeys } from "@services/keys/queryKeys";
import { useQuery } from "@tanstack/react-query";

export const useTodayRecommendUserListQuery = (userId: string) => {
  return useQuery(
    [queryKeys.users.todayRecommend, userId],
    () => todayRecommendUserApi(userId),
    {
      staleTime: 60 * 1000,
      cacheTime: 5 * 60 * 1000,
      keepPreviousData: true,
      refetchOnWindowFocus: false,
      useErrorBoundary: false,
    }
  );
};
