import { Controller, Get } from '@nestjs/common';
import { RestaurantService } from '@modules/restaurant/restaurant.service';
import { ApiCreatedResponse, ApiOperation, ApiTags } from '@nestjs/swagger';
import { RestaurantListsDto } from '@modules/restaurant/dto/restaurant.lists.dto';

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
    type: RestaurantListsDto,
  })
  @Get('/lists')
  async restaurantLists() {
    return this.restaurantService.getLists();
  }
}
