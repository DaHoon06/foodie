import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import {
  Restaurant,
  RestaurantDocument,
} from '@modules/restaurant/schema/restaurant.scheme';
import { MongoDataBase } from '@config/db/mongoCollections';
import { Model } from 'mongoose';

@Injectable()
export class RestaurantRepository {
  constructor(
    @InjectModel(Restaurant.name, MongoDataBase.FOODIE)
    private readonly restaurantModel: Model<RestaurantDocument>,
  ) {}

  async findManyRestaurantLists() {
    return this.restaurantModel.find();
  }
}
