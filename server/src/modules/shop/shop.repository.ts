import { DataSource, Repository } from 'typeorm';
import { ShopEntity } from './entities/shop.entity';
import { Injectable } from '@nestjs/common';

@Injectable()
export class ShopRepository extends Repository<ShopEntity> {
  constructor(private readonly dataSource: DataSource) {
    super(ShopEntity, dataSource.createEntityManager());
  }
}
