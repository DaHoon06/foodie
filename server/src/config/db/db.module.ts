import { Module } from '@nestjs/common';
import { MongoConnector } from '@config/db/index';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { CONFIG_OPTION, TYPEORM_OPTION } from './config';
import { TypeOrmModule } from '@nestjs/typeorm';

const mongoConnector = new MongoConnector();

@Module({
  imports: [
    mongoConnector.GoFoodieDatabase,
    ConfigModule.forRoot(CONFIG_OPTION()),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: TYPEORM_OPTION,
    }),
  ],
})
export class DataBaseModule {}
