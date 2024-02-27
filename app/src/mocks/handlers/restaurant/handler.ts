import {http, HttpResponse} from "msw";
import {responseConversion} from "@mocks/utills/responseConversion";
import {restaurantListMockData} from "@mocks/handlers/restaurant/data/listsData";
import {StoreCardItem} from "@components/cards/StoreCard";

const DOMAIN = '/api/restaurant'

export const getRestaurantListsApiMocking = http.get(
  `${DOMAIN}`,
  ({ request }) => {
    const url = new URL(request.url);
    const page =  +url.searchParams.get('page') || 1;

    const limit = 20;
    // exception error
    const error = false;
    if (error) return new HttpResponse(null, {status: 404});

    const paginationData = restaurantListMockData.slice((page - 1) * limit, page * limit);
    const data = responseConversion<StoreCardItem[]>(
      paginationData);
    return HttpResponse.json({...data});
  })