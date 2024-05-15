import { Controller, Get, Param, UseGuards } from '@nestjs/common';
import { ShopService } from '@modules/shop/shop.service';
import { JwtAuthGuard } from '@modules/auth/guards/jwt.guard';

@Controller('shop')
export class ShopController {
  constructor(private readonly shopService: ShopService) {}

  @Get('/marker/:creatorId')
  @UseGuards(JwtAuthGuard)
  async getMarker(@Param('creatorId') creatorId: string) {
    return this.shopService.findShopCoordinate(creatorId);
  }
}
