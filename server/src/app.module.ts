import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { ConfigModule } from '@nestjs/config';
import { DataBaseModule } from '@config/db/db.module';
import { UserModule } from '@modules/users/user.module';
import { RestaurantModule } from '@modules/restaurant/restaurant.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: ['.env'],
      isGlobal: true,
    }),
    DataBaseModule,
    UserModule,
    RestaurantModule,
  ],
  controllers: [AppController],
  providers: [],
})
export class AppModule {}
