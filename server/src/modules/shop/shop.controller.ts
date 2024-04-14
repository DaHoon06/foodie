import { Controller, Get, Param } from '@nestjs/common';
import { ShopService } from '@modules/shop/shop.service';

@Controller('shop')
export class ShopController {
  constructor(private readonly shopService: ShopService) {}

  @Get('/marker/:creatorId')
  async getMarker(@Param('creatorId') creatorId: string) {
    console.log(creatorId);
    return this.shopService.findShopCoordinate(creatorId);
  }
}
