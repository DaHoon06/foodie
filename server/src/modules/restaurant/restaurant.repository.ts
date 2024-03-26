import { Injectable } from '@nestjs/common';
import { FilterDto } from './dto/filter.dto';

@Injectable()
export class RestaurantRepository {
  listLimit: number = 20;

  constructor() {}

  async findManyRestaurantLists(filters: FilterDto): Promise<any[]> {
    return [];
  }

  regionFilter(region: string): string {
    return '';
  }

  listSort(sort: string): string {
    return '';
  }
}
