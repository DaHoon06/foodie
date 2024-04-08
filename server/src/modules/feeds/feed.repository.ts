import { Injectable } from '@nestjs/common';
import { DataSource, Repository } from 'typeorm';
import { FeedEntity } from './entities/feed.entity';

@Injectable()
export class FeedRepository extends Repository<FeedEntity> {
  listLimit: number = 20;

  constructor(private readonly dataSource: DataSource) {
    super(FeedEntity, dataSource.createEntityManager());
  }

  async findManyFeedLists(region: string, page: number) {
    const lists = await this.createQueryBuilder('feed')
      .where('feed.deleted = false')
      .leftJoinAndSelect('feed.shop', 'shop')
      .leftJoinAndSelect('feed.user', 'user')
      .orderBy('feed.created_at', 'DESC')
      .limit(this.listLimit)
      .getMany();
    return lists.map((list) => {
      let user = null;
      let shop = null;

      if (list.user) {
        user = {
          userId: list.user._id,
          username: list.user.username,
          thumbnail: '',
        };
      }

      if (list.shop) {
        shop = {
          shopId: list.shop._id,
          shopName: list.shop.title,
          shopDescription: list.shop.description,
          category: list.shop.category,
          shopAddress: {
            sido: list.shop.sido,
            sigungu: list.shop.sigungu,
            fullAddress: list.shop.fullAddress,
          },
        };
      }

      return {
        feedId: list._id,
        feedContent: list.content,
        feedCreatedDate: list.created_at,
        user,
        shop,
      };
    });
  }

  async findRecentlyFeed(userId: string) {
    const feeds = await this.createQueryBuilder('feed')
      .where('feed.user_id = :userId AND feed.deleted = false', { userId })
      .leftJoinAndSelect('feed.shop', 'shop')
      .select(['feed', 'shop'])
      .orderBy('feed.created_at', 'DESC')
      .limit(10)
      .getMany();
    return feeds.map((feed) => {
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
  }
}
