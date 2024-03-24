import { Module } from '@nestjs/common';
import { FeedService } from './feed.service';
import { FeedRepository } from './feed.repository';
import { FeedController } from './feed.controller';
import { FeedFeature } from './schema/feed.schema';

@Module({
  imports: [FeedFeature],
  controllers: [FeedController],
  providers: [FeedService, FeedRepository],
  exports: [],
})
export class FeedModule {}
