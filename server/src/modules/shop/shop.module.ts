import { Module } from '@nestjs/common';
import { ShopController } from './shop.controller';
import { ShopService } from './shop.service';
import { ShopRepository } from '@modules/shop/shop.repository';
import { UserModule } from '@modules/users/user.module';

@Module({
  imports: [UserModule],
  controllers: [ShopController],
  providers: [ShopService, ShopRepository],
  exports: [ShopService],
})
export class ShopModule {}
