import { Module } from '@nestjs/common';
import { MongoConnector } from '@config/db/index';

const mongoConnector = new MongoConnector();

@Module({
  imports: [mongoConnector.GoFoodieDatabase],
  // providers: [UnisurveyFeature],
})
export class DataBaseModule {}
