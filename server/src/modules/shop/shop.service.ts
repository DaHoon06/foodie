import { Injectable } from '@nestjs/common';
import { ShopRepository } from '@modules/shop/shop.repository';
import { CreateShopDto } from '@modules/shop/dto/create.shop.dto';
import { ShopEntity } from '@modules/shop/entities/shop.entity';
import { UserEntity } from '@modules/users/entities/user.entity';

@Injectable()
export class ShopService {
  constructor(private readonly shopRepository: ShopRepository) {}

  async createShop(
    user: UserEntity,
    shopInfo: CreateShopDto,
  ): Promise<ShopEntity> {
    const { title, category, address } = shopInfo;
    const shopEntity: ShopEntity = ShopEntity.create({
      title,
      category,
      fullAddress: address.name,
      sigungu: address.sigungu,
      sido: address.sido,
      y: address.y,
      x: address.x,
      user,
    });
    return this.shopRepository.create(shopEntity).save();
  }
  async findOneByXy(x: string, y: string): Promise<ShopEntity> {
    return this.shopRepository.findOne({ where: { x, y } });
  }
}
