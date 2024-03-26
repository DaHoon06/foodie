import { Injectable } from '@nestjs/common';
import { DataSource, Repository } from 'typeorm';
import { FeedEntity } from './entities/feed.entity';

@Injectable()
export class FeedRepository extends Repository<FeedEntity> {
  listLimit: number = 20;

  constructor(private readonly dataSource: DataSource) {
    super(FeedEntity, dataSource.createEntityManager());
  }
}
