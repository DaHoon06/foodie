import { Module } from '@nestjs/common';
import { ShopController } from './shop.controller';
import { ShopService } from './shop.service';
import { ShopRepository } from '@modules/shop/shop.repository';

@Module({
  imports: [],
  controllers: [ShopController],
  providers: [ShopService, ShopRepository],
  exports: [ShopService],
})
export class ShopModule {}
