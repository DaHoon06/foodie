import { Injectable } from '@nestjs/common';
import { DataSource, Repository } from 'typeorm';
import { FeedEntity } from './entities/feed.entity';

@Injectable()
export class FeedRepository extends Repository<FeedEntity> {
  listLimit: number = 20;

  constructor(private readonly dataSource: DataSource) {
    super(FeedEntity, dataSource.createEntityManager());
  }

  async findAll() {
    return this.createQueryBuilder('feed')
      .where('feed.user_id is NOT NULL AND feed.deleted = false')
      .innerJoinAndSelect('feed.user', 'user')
      .select([])
      .getMany();
  }

  async findRecentlyFeed(userId: string) {
    const feeds = await this.createQueryBuilder('feed')
      .leftJoinAndSelect('feed.user', 'user')
      .where('feed.user_id = :userId', { userId })
      .select(['feed', 'user'])
      .take(10)
      .getMany();

    const transformedData = feeds.map((feed) => ({
      id: feed._id,
      content: feed.content,
      user: {
        id: feed.user._id,
        username: feed.user.username,
        hashname: feed.user.hashname,
        type: feed.user.type,
      },
      created_at: feed.created_at,
    }));

    return transformedData;
  }
}
