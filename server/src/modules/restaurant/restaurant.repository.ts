import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import {
  Restaurant,
  RestaurantDocument,
} from '@modules/restaurant/schema/restaurant.scheme';
import { MongoDataBase } from '@config/db/mongoCollections';
import { Model } from 'mongoose';
import { FilterDto } from './dto/filter.dto';

@Injectable()
export class RestaurantRepository {
  constructor(
    @InjectModel(Restaurant.name, MongoDataBase.FOODIE)
    private readonly restaurantModel: Model<RestaurantDocument>,
  ) {}

  async findManyRestaurantLists(filters?: FilterDto): Promise<Restaurant[]> {
    // return this.restaurantModel.aggregate([
    //   { $match: { isDeleted: false } },
    //   { $limit: 10 },
    //   {$skip: 1}
    // ]);
    return this.restaurantModel.find();
  }
}
