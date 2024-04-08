import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { FeedService } from './feed.service';
import { ApiTags } from '@nestjs/swagger';
import { CreateFeedDto } from './dto/create.feed.dto';

@Controller({
  path: 'feeds',
})
@ApiTags('포스트 관련한 API')
export class FeedController {
  constructor(private readonly feedService: FeedService) {}

  @Post()
  async createFeed(@Body() body: CreateFeedDto) {
    return this.feedService.createFeed(body);
  }

  @Get('/lists')
  async getFeedLists() {
    return this.feedService.findManyFeedLists();
  }

  @Get('/recently/:creatorId')
  async findRecentlyFeed(@Param('creatorId') creatorId: string) {
    return this.feedService.findRecentlyFeed(creatorId);
  }
}
