import { Injectable } from '@nestjs/common';
import { CreateFeedDto } from './dto/create.feed.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Feed, FeedDocument } from './schema/feed.schema';
import { MongoDataBase } from '@config/db/mongoCollections';
import { Model } from 'mongoose';
import { FilterDto } from './dto/filter.dto';
import { RegionType } from '@enums/region.enum';

@Injectable()
export class FeedRepository {
  listLimit: number = 20;

  constructor(
    @InjectModel(Feed.name, MongoDataBase.FOODIE)
    private readonly feedModel: Model<FeedDocument>,
  ) {}

  async save(body: CreateFeedDto) {
    const feed = new this.feedModel(body);
    return feed.save();
  }

  async findManyFeedLists(filters: FilterDto): Promise<Feed[]> {
    const { page, region } = filters;
    let currentPage = page;
    if (isNaN(page) || !page) currentPage = 1;
    const $skip = (currentPage - 1) * this.listLimit;
    const regionFilter = this.regionFilter(region);
    return this.feedModel.aggregate([
      {
        $match: {
          isDeleted: false,
          'region.major': regionFilter,
        },
      },
      { $limit: this.listLimit },
      { $skip },
      { $sort: { _id: -1 } },
    ]);
  }

  regionFilter(region: string): string {
    return RegionType[region];
  }
}
