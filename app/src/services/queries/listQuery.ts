import {useQuery} from "@tanstack/react-query";
import {queryKeys} from "@services/keys/queryKeys";
import {getRestaurantListsApi} from "@services/apis/restaurant";
import {queryClient} from "@libs/tanstack";
import {AxiosError} from "axios";
import {StoreCardItem} from "@components/cards/StoreCard";

export const prefetchingRestaurantList = async () => {
  return queryClient.prefetchQuery(
    [queryKeys.lists.restaurantLists],
    () => getRestaurantListsApi())
}

export const useRestaurantQuery = (sort: string) => {
  return useQuery<unknown, AxiosError, ResponseReturnValue<{ data: StoreCardItem[] }>>(
    [queryKeys.lists.restaurantLists],
    () => getRestaurantListsApi(sort).catch(e => {
      //todo: error handling
      const error = e as unknown as AxiosError;
      if (error.response && error.response.data) {
        const {statusCode, message} = error.response.data as { statusCode: number, message: string }
        if (statusCode === 404) {
          console.log(message);
        }
      }
    }),
    {
      keepPreviousData: true,
      useErrorBoundary: false,
    }
  )
}
