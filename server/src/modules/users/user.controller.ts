import {Controller, Post} from "@nestjs/common";

@Controller({
  path: 'users'
})
export class UserController {
  constructor() {}

  @Post()
  async tesCode(): Promise<string> {
    return 'say hello'
  }
}
