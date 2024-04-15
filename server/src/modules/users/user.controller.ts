import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { UserService } from './user.service';
import { ApiTags } from '@nestjs/swagger';

@Controller({
  path: 'users',
})
@ApiTags('사용자 관련한 API')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get('/recommend/:creatorId')
  async recommendUser(@Param('creatorId') creatorId: string) {
    return this.userService.randomRecommendUser(creatorId);
  }

  @Post('/checked')
  async test(@Body() user: any) {
    const token = await this.userService.userChecked(user);
    return token;
  }
}
