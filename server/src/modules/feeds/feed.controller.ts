import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  Query,
  UseGuards,
} from '@nestjs/common';
import { FeedService } from './feed.service';
import { ApiTags } from '@nestjs/swagger';
import { CreateFeedDto } from './dto/create.feed.dto';
import { FilterDto } from '@modules/feeds/dto/filter.dto';
import { JwtGuard } from '@modules/auth/guards/jwt.guard';

@Controller({
  path: 'feeds',
})
@ApiTags('포스트 관련한 API')
export class FeedController {
  constructor(private readonly feedService: FeedService) {}

  @Post()
  @UseGuards(JwtGuard)
  async createFeed(@Body() body: CreateFeedDto) {
    return this.feedService.createFeed(body);
  }

  @Get('/lists')
  async getFeedLists(@Query() filters: FilterDto) {
    return this.feedService.findManyFeedLists(filters);
  }

  @Get('/recently/:creatorId')
  async findRecentlyFeed(@Param('creatorId') creatorId: string) {
    return this.feedService.findRecentlyFeed(creatorId);
  }

  @Get('/detail/:feedId')
  async feedDetail(@Param('feedId') feedId: string) {
    return this.feedService.findOneFeedByFeedId(feedId);
  }
}
