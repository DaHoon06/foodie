import { Body, Controller, Post, UseGuards } from '@nestjs/common';
import { FeedService } from './feed.service';
import { ApiTags } from '@nestjs/swagger';
import { CreateFeedDto } from './dto/create.feed.dto';
import { JwtGuard } from '@modules/auth/jwt.guard';
import { User } from '@modules/users/decorators/user-info.decorator';
import { JwtPayload } from '@modules/auth/dto/jwt.dto';

@Controller({
  path: 'feeds',
})
@ApiTags('포스트 관련한 API')
export class FeedController {
  constructor(private readonly feedService: FeedService) {}

  @UseGuards(JwtGuard)
  @Post()
  async createFeed(
    @User() { username }: JwtPayload,
    @Body() body: CreateFeedDto,
  ) {
    return this.feedService.createFeed(body, username);
  }
}
