import { Body, Controller, Post } from '@nestjs/common';
import { SignInDto } from './dto/sign-in.dto';
import { UserService } from './user.service';
import { ApiTags } from '@nestjs/swagger';

@Controller({
  path: 'users',
})
@ApiTags('사용자 관련한 API')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post('/sign-in')
  async signIn(@Body() body: SignInDto): Promise<string> {
    return this.userService.signIn(body);
  }
}
