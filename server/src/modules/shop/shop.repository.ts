import { Repository, DataSource } from 'typeorm';
import { ShopEntity } from './entities/shop.entity';

export class ShopRepository extends Repository<ShopEntity> {
  constructor(private readonly dataSource: DataSource) {
    super(ShopEntity, dataSource.createEntityManager());
  }
}
