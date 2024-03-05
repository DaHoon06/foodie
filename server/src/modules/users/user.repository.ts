import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { UserDocument, UserSchema } from '@modules/users/schema/user.schema';
import { MongoDataBase } from '@config/db/mongoCollections';
import { Model } from 'mongoose';

@Injectable()
export class UserRepository {
  constructor(
    @InjectModel(UserSchema.name, MongoDataBase.FOODIE)
    private readonly userModel: Model<UserDocument>,
  ) {}
}
