import { Injectable } from '@nestjs/common';
import { DataSource, Repository } from 'typeorm';
import { FeedEntity } from './entities/feed.entity';

@Injectable()
export class FeedRepository extends Repository<FeedEntity> {
  listLimit: number = 20;

  constructor(private readonly dataSource: DataSource) {
    super(FeedEntity, dataSource.createEntityManager());
  }

  async findOneFeedAndUser(_id: string) {
    return this.createQueryBuilder('feed')
      .where('feed._id = :_id', { _id })
      .leftJoinAndSelect('feed.user', 'user')
      .getOne();
  }

  async findOneFeedByFeedId(_id: string) {
    const data = await this.createQueryBuilder('feed')
      .where('feed._id = :_id', { _id })
      .leftJoinAndSelect('feed.shop', 'shop')
      .leftJoinAndSelect('feed.user', 'user')
      .leftJoinAndSelect('feed.files', 'files')
      .select(['feed', 'shop', 'user', 'files.originName', 'files.path1'])
      .getOne();
    let shop = null;
    if (data.shop) {
      shop = {
        shopId: data.shop._id,
        shopName: data.shop.title,
        shopDescription: data.shop.description,
        category: data.shop.category,
        shopAddress: {
          sido: data.shop.sido,
          sigungu: data.shop.sigungu,
          fullAddress: data.shop.fullAddress,
        },
      };
    }
    return {
      ...data,
      feedContent: data.content,
      feedCreatedDate: data.created_at,
      shop,
    };
  }

  async findMyFeedLists(creatorId: string, page: number) {
    const queryBuilder = this.createQueryBuilder('feed')
      .where('feed.deleted = false')
      .leftJoinAndSelect('feed.shop', 'shop')
      .leftJoinAndSelect('feed.user', 'user')
      .leftJoinAndSelect('feed.files', 'files')
      .andWhere('user.creatorId = :creatorId')
      .setParameter('creatorId', creatorId)
      .select(['feed', 'shop', 'user', 'files']);

    const offset = (page - 1) * this.listLimit;
    const listsData = await queryBuilder
      .orderBy('feed.created_at', 'DESC')
      .skip(offset)
      .take(this.listLimit)
      .getMany();
    return listsData.map((list) => {
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
        files: list.files,
      };
    });
  }

  async findManyFeedLists(region: string, page: number) {
    let queryBuilder = this.createQueryBuilder('feed')
      .where('feed.deleted = false')
      .leftJoinAndSelect('feed.shop', 'shop')
      .leftJoinAndSelect('feed.user', 'user')
      .leftJoinAndSelect('feed.files', 'files')
      .select(['feed', 'shop', 'user', 'files']);
    if (region !== '전체')
      queryBuilder = queryBuilder.andWhere('shop.sido = :sido', {
        sido: region,
      });

    const offset = (page - 1) * this.listLimit;
    const listsData = await queryBuilder
      .orderBy('feed.created_at', 'DESC')
      .skip(offset)
      .take(this.listLimit)
      .getMany();

    return listsData.map((list) => {
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
        files: list.files,
      };
    });
  }

  async findRecentlyFeed(userId: string) {
    const feeds = await this.createQueryBuilder('feed')
      .where('feed.user_id = :userId AND feed.deleted = false', { userId })
      .leftJoinAndSelect('feed.shop', 'shop')
      .leftJoinAndSelect('feed.files', 'files')
      .select(['feed', 'shop', 'files'])
      .orderBy('feed.created_at', 'DESC')
      .limit(10)
      .getMany();
    return feeds.map((feed) => {
      let shop = null;
      let thumbnail = '';

      if (feed.files && feed.files.length > 0) {
        const firstFile = feed.files[0];
        thumbnail = firstFile.path1;
      }
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
        thumbnail,
        created_at: feed.created_at,
      };
    });
  }
}
