import { Injectable } from '@nestjs/common';
import { CreateFeedDto } from './dto/create.feed.dto';
import { FeedRepository } from './feed.repository';
import { FeedEntity } from './entities/feed.entity';

@Injectable()
export class FeedService {
  constructor(private readonly feedRepository: FeedRepository) {}

  async createFeed(body: CreateFeedDto, username: string) {
    const feed = FeedEntity.create({
      ...body,
    });

    await this.feedRepository.save(feed);
  }

  async findAll() {
    return this.feedRepository.findAll();
  }
}
