import { Injectable } from '@nestjs/common';
import { CreateFeedDto } from './dto/create.feed.dto';
import { FeedRepository } from './feed.repository';

@Injectable()
export class FeedService {
  constructor(private readonly feedRepository: FeedRepository) {}

  async createFeed(body: CreateFeedDto) {
    return this.feedRepository.save(body);
  }
}
