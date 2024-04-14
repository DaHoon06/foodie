import { Body, Controller, Get, Param, Post, Res } from '@nestjs/common';
import { UserService } from './user.service';
import { ApiTags } from '@nestjs/swagger';
import { Response } from 'express';

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

    // res.cookie('token', token, {
    //   domain: 'localhost',
    //   path: '/',
    //   httpOnly: false,
    //   secure: true,
    //   sameSite: 'none',
    // });
    // res.send(200);
    return token;
  }
}
