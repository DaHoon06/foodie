import { DataSource, Repository } from 'typeorm';
import { ShopEntity } from './entities/shop.entity';
import { Injectable } from '@nestjs/common';

@Injectable()
export class ShopRepository extends Repository<ShopEntity> {
  constructor(private readonly dataSource: DataSource) {
    super(ShopEntity, dataSource.createEntityManager());
  }

  async findManyShopCoordinate(userId: string) {
    const shops = await this.createQueryBuilder('shop')
      .where('shop.user_id = :userId', { userId })
      .leftJoinAndSelect('shop.user', 'user')
      .select(['shop', 'user'])
      .getMany();
    return shops.map((shop) => {
      return {
        shopId: shop._id,
        title: shop.title,
        x: shop.x,
        y: shop.y,
        createDate: shop.created_at,
      };
    });
  }
}
