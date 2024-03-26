import { Body, Controller, Post } from '@nestjs/common';
import { SignInDto } from './dto/sign-in.dto';
import { UserService } from './user.service';

@Controller({
  path: 'users',
})
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post('/sign-in')
  async signIn(@Body() body: SignInDto) {
    return this.userService.signIn(body);
  }

  @Post()
  async tesCode(): Promise<string> {
    return 'say hello';
  }
}
