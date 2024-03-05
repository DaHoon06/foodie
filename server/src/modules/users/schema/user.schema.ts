import { MongoCollections, MongoDataBase } from '@config/db/mongoCollections';
import {
  AsyncModelFactory,
  MongooseModule,
  Prop,
  Schema,
  SchemaFactory,
} from '@nestjs/mongoose';
import { ObjectId } from 'mongodb';
import { Document, HydratedDocument } from 'mongoose';

@Schema({ versionKey: false, collection: MongoCollections.USER })
export class UserSchema extends Document {
  @Prop({ required: true, type: ObjectId })
  _id: string;

  @Prop({ required: true, type: String })
  NAME: string;
}

export const schema = SchemaFactory.createForClass(UserSchema);

// schema.index({
//   NAME: 1,
// });

export const UserFeature = MongooseModule.forFeature(
  [{ name: UserSchema.name, schema }],
  MongoDataBase.FOODIE,
);

export const UserFactory: AsyncModelFactory = {
  name: UserSchema.name,
  useFactory: () => {
    return UserFeature;
  },
};

export type UserDocument = HydratedDocument<UserSchema>;
