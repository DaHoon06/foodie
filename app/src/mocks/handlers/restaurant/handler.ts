import {http, HttpResponse} from "msw";
import {responseConversion} from "@mocks/utills/responseConversion";
import {restaurantListMockData} from "@mocks/handlers/restaurant/data/listsData";
import {StoreCardItem} from "@components/cards/StoreCard";

const DOMAIN = '/api/restaurant'

export const getRestaurantListsApiMocking = http.get(
  `${DOMAIN}`,
  () => {

    // exception error
    const error = false;
    if (error) return new HttpResponse(null, {status: 404});

    const data = responseConversion<StoreCardItem[]>(
      restaurantListMockData);
    return HttpResponse.json({...data});
  })