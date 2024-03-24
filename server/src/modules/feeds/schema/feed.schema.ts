import { Base } from '@common/schema/base.schema';
import { MongoCollections, MongoDataBase } from '@config/db/mongoCollections';
import { MongooseModule, Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument, Types } from 'mongoose';

@Schema({
  versionKey: false,
  collection: MongoCollections.Feed,
  timestamps: true,
})
export class Feed extends Base {
  @Prop()
  _id: Types.ObjectId;

  @Prop()
  content: string;

  @Prop({ default: [] })
  thumbnail: string[];

  @Prop({ default: '' })
  resturantId: string;
}

export type FeedDocument = HydratedDocument<Feed>;

export const FeedSchema = SchemaFactory.createForClass(Feed);

export const FeedFeature = MongooseModule.forFeature(
  [
    {
      name: Feed.name,
      schema: FeedSchema,
      collection: MongoCollections.Feed,
    },
  ],
  MongoDataBase.FOODIE,
);
