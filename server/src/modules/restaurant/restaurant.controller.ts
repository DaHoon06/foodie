import { Controller, Get, Query } from '@nestjs/common';
import { RestaurantService } from '@modules/restaurant/restaurant.service';
import { ApiCreatedResponse, ApiOperation, ApiTags } from '@nestjs/swagger';
import { RestaurantListsDto } from '@modules/restaurant/dto/restaurant.lists.dto';
import { FilterDto } from './dto/filter.dto';

@Controller({
  path: 'restaurant',
  version: '',
})
@ApiTags('식당 / 상점')
export class RestaurantController {
  constructor(private readonly restaurantService: RestaurantService) {}

  @ApiOperation({
    summary: '지역별 식당 순위를 조회합니다.',
  })
  @ApiCreatedResponse({
    description: '식당 목록 조회 성공',
    type: Array<RestaurantListsDto>,
  })
  @Get('/lists')
  async restaurantLists(
    @Query('page') page: number,
    @Query('sort') sort: string,
    @Query('region') region: string,
  ): Promise<RestaurantListsDto[]> {
    const filters: FilterDto = {
      page,
      sort,
      region,
    };
    return this.restaurantService.getLists(filters);
  }
}
