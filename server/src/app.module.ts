import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { DataBaseModule } from '@config/db/db.module';
import { UserModule } from '@modules/users/user.module';
import { RestaurantModule } from '@modules/restaurant/restaurant.module';
import { FeedModule } from '@modules/feeds/feed.module';

@Module({
  imports: [DataBaseModule, UserModule, RestaurantModule, FeedModule],
  controllers: [AppController],
  providers: [],
})
export class AppModule {}
