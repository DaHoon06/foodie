import { Module } from '@nestjs/common';
import { RestaurantController } from '@modules/restaurant/restaurant.controller';
import { RestaurantService } from '@modules/restaurant/restaurant.service';
import { RestaurantRepository } from '@modules/restaurant/restaurant.repository';
import { RestaurantFeature } from '@modules/restaurant/schema/restaurant.scheme';

@Module({
  imports: [RestaurantFeature],
  controllers: [RestaurantController],
  providers: [RestaurantService, RestaurantRepository],
  exports: [],
})
export class RestaurantModule {}
