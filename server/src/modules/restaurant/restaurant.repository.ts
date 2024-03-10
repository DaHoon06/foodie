import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import {
  Restaurant,
  RestaurantDocument,
} from '@modules/restaurant/schema/restaurant.scheme';
import { MongoDataBase } from '@config/db/mongoCollections';
import { Model } from 'mongoose';
import { FilterDto } from './dto/filter.dto';
import { RegionType } from './enum/region.enum';

@Injectable()
export class RestaurantRepository {
  listLimit: number = 20;

  constructor(
    @InjectModel(Restaurant.name, MongoDataBase.FOODIE)
    private readonly restaurantModel: Model<RestaurantDocument>,
  ) {}

  async findManyRestaurantLists(filters: FilterDto): Promise<Restaurant[]> {
    const { sort, page, region } = filters;
    let currentPage = page;
    if (isNaN(page) || !page) currentPage = 1;
    const $skip = (currentPage - 1) * this.listLimit;
    const regionFilter = this.regionFilter(region);
    const sorting = this.listSort(sort);
    return this.restaurantModel.aggregate([
      {
        $match: {
          isDeleted: false,
          'region.major': regionFilter,
        },
      },
      { $limit: this.listLimit },
      { $skip },
      { $sort: { _id: -1 } },
      { $sort: { [sorting]: -1 } },
    ]);
  }

  regionFilter(region: string): string {
    return RegionType[region];
  }

  listSort(sort: string): string {
    if (sort === 'review') {
      return 'point.review';
    } else if (sort === 'view') {
      return 'point.view';
    } else {
      return 'point.average';
    }
  }
}
