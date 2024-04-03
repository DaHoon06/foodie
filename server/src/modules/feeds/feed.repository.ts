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
      .where('feed.user_id = :userId', { userId })
      .leftJoinAndSelect('feed.shop', 'shop')
      .select(['feed', 'shop'])
      .orderBy('feed.created_at', 'DESC')
      .limit(10)
      .getMany();
    const transformedData = feeds.map((feed) => {
      let shop = null;

      if (feed.shop) {
        shop = {
          title: feed.shop.title,
          description: feed.shop.description,
          sigungu: feed.shop.sigungu,
          sido: feed.shop.sido,
          category: feed.shop.category,
        };
      }

      return {
        id: feed._id,
        content: feed.content,
        shop,
        created_at: feed.created_at,
      };
    });

    return transformedData;
  }
}
