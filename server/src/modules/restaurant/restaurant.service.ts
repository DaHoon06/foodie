import { Injectable } from '@nestjs/common';
import { RestaurantRepository } from '@modules/restaurant/restaurant.repository';

@Injectable()
export class RestaurantService {
  constructor(private readonly restaurantRepository: RestaurantRepository) {}

  async getLists() {
    return this.restaurantRepository.findManyRestaurantLists();
  }
}
