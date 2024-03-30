import { Controller } from '@nestjs/common';
import { UserService } from './user.service';
import { ApiTags } from '@nestjs/swagger';

@Controller({
  path: 'users',
})
@ApiTags('사용자 관련한 API')
export class UserController {
  constructor(private readonly userService: UserService) {}
}
