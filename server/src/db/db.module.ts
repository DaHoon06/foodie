import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { CONFIG_OPTION, TYPEORM_OPTION } from './config';
import { TypeOrmModule } from '@nestjs/typeorm';

const CONFIG = CONFIG_OPTION();

@Module({
  imports: [
    ConfigModule.forRoot(CONFIG),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: TYPEORM_OPTION,
    }),
  ],
})
export class DataBaseModule {}
