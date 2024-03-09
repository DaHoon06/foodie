import { MongooseModule, Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument, Types } from 'mongoose';
import { MongoCollections, MongoDataBase } from '@config/db/mongoCollections';
import { Base } from '@common/schema/base.schema';

export class Region {
  @Prop()
  major: string;

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
  @Prop({ default: 0 })
  view: number;

  @Prop({ default: 0 })
  review: number;

  @Prop({ default: 0 })
  average: number;
}

@Schema({
  versionKey: false,
  collection: MongoCollections.Restaurant,
  timestamps: true,
})
export class Restaurant extends Base {
  @Prop()
  _id: Types.ObjectId;

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

  @Prop({ default: false })
  isDeleted: boolean;
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
