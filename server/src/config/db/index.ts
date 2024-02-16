import {ConfigService} from "@nestjs/config";
import {TypeOrmModuleOptions} from "@nestjs/typeorm";

export const DbConfig = (config: ConfigService): TypeOrmModuleOptions => ({
  type: 'mysql',
  host: config.get('DB_HOST'),
  port: config.get<number>('DB_PORT'),
  username: config.get('DB_USER'),
  password: config.get('DB_PASSWORD'),
  database: config.get('DB_NAME'),
  entities: [],
  synchronize: true,
});
