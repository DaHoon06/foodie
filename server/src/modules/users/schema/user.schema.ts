import { MongoCollections, MongoDataBase } from '@config/db/mongoCollections';
import {
  AsyncModelFactory,
  MongooseModule,
  Prop,
  Schema,
  SchemaFactory,
} from '@nestjs/mongoose';
import { Document, HydratedDocument } from 'mongoose';

@Schema({ versionKey: false, collection: MongoCollections.User })
export class UserSchema extends Document {
  @Prop()
  userId: string;

  @Prop({ required: true, type: String })
  name: string;
}

export const schema = SchemaFactory.createForClass(UserSchema);

// schema.index({
//   NAME: 1,
// });

export const UserFeature = MongooseModule.forFeature(
  [{ name: UserSchema.name, schema, collection: MongoCollections.User }],
  MongoDataBase.FOODIE,
);

export const UserFactory: AsyncModelFactory = {
  name: UserSchema.name,
  useFactory: () => {
    return UserFeature;
  },
};

export type UserDocument = HydratedDocument<UserSchema>;
