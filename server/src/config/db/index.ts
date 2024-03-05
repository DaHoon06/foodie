import {AsyncModelFactory, MongooseModule} from '@nestjs/mongoose';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { DynamicModule } from '@nestjs/common';
import { MongoDataBase } from './mongoCollections';
import {UserFactory} from "@modules/users/schema/user.schema";

export const GoFoodieConfig = async (
  configService: ConfigService,
): Promise<{ uri: string; dbName: string }> => {
  const mongouri = configService.get<string>('MONGO_URI') as string;
  return {
    uri: mongouri,
    dbName: MongoDataBase.FOODIE,
  };
};

export class MongoConnector {
  get GoFoodieDatabase(): DynamicModule {
    return MongooseModule.forRootAsync({
      imports: [ConfigModule],
      connectionName: MongoDataBase.FOODIE,
      useFactory: GoFoodieConfig,
      inject: [ConfigService],
    });
  }
}

const foodieFactory: AsyncModelFactory[] = [
  UserFactory,
];

export const GoFoodieFeature = MongooseModule.forFeatureAsync(
  foodieFactory,
  MongoDataBase.FOODIE,
);
