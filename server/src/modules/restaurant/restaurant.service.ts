import { Injectable } from '@nestjs/common';
import { RestaurantRepository } from '@modules/restaurant/restaurant.repository';
import { FilterDto } from './dto/filter.dto';
import { RestaurantListsDto } from './dto/restaurant.lists.dto';
import { makeCategoryTag, makeRegionTag } from './utiils/lists';

@Injectable()
export class RestaurantService {
  constructor(private readonly restaurantRepository: RestaurantRepository) {}

  async getLists(filters?: FilterDto): Promise<RestaurantListsDto[]> {
    const data =
      await this.restaurantRepository.findManyRestaurantLists(filters);
    return data.map((store) => {
      const { region, categories, point, storeName } = store;
      const regionTag = makeRegionTag(region);
      const categoryTag = makeCategoryTag(categories);
      return {
        title: storeName,
        location: regionTag,
        categories: categoryTag,
        point: point.average,
        viewCount: point.view,
        reviewCount: point.review,
      };
    });
  }
}
