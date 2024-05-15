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
import { JwtAuthGuard } from '@modules/auth/guards/jwt.guard';
import { UserObject } from '@decorators/user.object.decorator';
import { JwtPayload } from '@modules/auth/dto/jwt.dto';

@Controller({
  path: 'feeds',
})
@ApiTags('포스트 관련한 API')
export class FeedController {
  constructor(private readonly feedService: FeedService) {}

  @Post()
  @UseGuards(JwtAuthGuard)
  async createFeed(
    @Body() body: CreateFeedDto,
    @UserObject() user: JwtPayload,
  ) {
    console.log(user);
    return this.feedService.createFeed(body, user);
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

  @UseGuards(JwtAuthGuard)
  @Get('/my-list')
  async myFeedList(
    @UserObject() user: JwtPayload,
    @Query('page') page: number,
  ) {
    return this.feedService.findMyFeedList(user, page);
  }
}
