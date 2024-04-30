import {queryClient} from "@libs/tanstack";
import {queryKeys} from "@services/keys/queryKeys";
import {getMarkerApi} from "@apis/shop/shop.api";
import {useQuery} from "@tanstack/react-query";

export const prefetchingMarker = async (creatorId: string): Promise<void> => {
  await queryClient.prefetchQuery(
    [queryKeys.maps.marker, creatorId],
    () => getMarkerApi(creatorId)
  )
};

export const useMarkerQuery = async (creatorId: string) => {
  return useQuery(
    [queryKeys.maps.marker, creatorId],
    () => getMarkerApi(creatorId),
    {
      staleTime: 60 * 1000,
      cacheTime: 5 * 60 * 1000,
      keepPreviousData: false,
      refetchOnWindowFocus: false,
      useErrorBoundary: false,
    }
  );
}
