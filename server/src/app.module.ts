import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import {ConfigModule} from "@nestjs/config";
import {DbModule} from "@config/db/db.module";

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: ['.env.local'],
      isGlobal: true,
    }),
    // DbModule,
  ],
  controllers: [AppController],
  providers: [
  ],
})
export class AppModule {}
