import {
  Body,
  Controller,
  Get,
  Param,
  Patch,
  Post,
  Query,
  UseGuards,
} from '@nestjs/common';
import { UserService } from './user.service';
import { ApiTags } from '@nestjs/swagger';
import { JwtGuard } from '@modules/auth/guards/jwt.guard';
import { UserObject } from '@decorators/user.object.decorator';
import { JwtPayload } from '@modules/auth/dto/jwt.dto';
import { ProfileUpdateDto } from '@modules/users/dto/profile.update.dto';

@Controller({
  path: 'users',
})
@ApiTags('사용자 관련한 API')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get('/recommend')
  async recommendUser(@Query('id') creatorId: string) {
    return this.userService.randomRecommendUser(creatorId);
  }

  @Post('/checked')
  async test(@Body() user: any) {
    const token = await this.userService.userChecked(user);
    return token;
  }

  @Patch('/profile')
  @UseGuards(JwtGuard)
  async profileUpdate(
    @Body() body: ProfileUpdateDto,
    @UserObject() user: JwtPayload,
  ) {
    return this.userService.profileUpdate(body, user);
  }

  @Get('/profile/:id')
  async findUserProfile(@Param('id') id: string) {
    return this.userService.findOneUserByCreatorId(id);
  }
}
