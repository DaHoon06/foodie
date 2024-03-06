import { MongooseModule, Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';
import { MongoCollections, MongoDataBase } from '@config/db/mongoCollections';

export class Region {
  @Prop()
  district: string;

  @Prop()
  town: string;
}

export class Categories {
  @Prop()
  majorCategory: string;

  @Prop()
  middleCategory: string[];
}

export class Point {
  @Prop()
  view: number;

  @Prop()
  review: number;

  @Prop()
  average: number;
}

@Schema({
  versionKey: false,
  collection: MongoCollections.Restaurant,
  timestamps: true,
})
export class Restaurant {
  @Prop()
  storeId: string;

  @Prop()
  storeName: string;

  @Prop()
  userId: string;

  @Prop()
  region: Region;

  @Prop()
  categories: Categories;

  @Prop()
  point: Point;
}

export type RestaurantDocument = HydratedDocument<Restaurant>;

export const RestaurantSchema = SchemaFactory.createForClass(Restaurant);

export const RestaurantFeature = MongooseModule.forFeature(
  [
    {
      name: Restaurant.name,
      schema: RestaurantSchema,
      collection: MongoCollections.Restaurant,
    },
  ],
  MongoDataBase.FOODIE,
);
