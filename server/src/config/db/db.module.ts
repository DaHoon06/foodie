import {Module} from "@nestjs/common";
import {TypeOrmModule} from "@nestjs/typeorm";
import {ConfigModule, ConfigService} from "@nestjs/config";
import {DbConfig} from "@config/db/index";

@Module({
  imports: [TypeOrmModule.forRootAsync({
    imports: [ConfigModule],
    inject: [ConfigService],
    useFactory: DbConfig,
  }),],
})
export class DbModule {}