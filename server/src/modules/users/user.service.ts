import { Injectable } from '@nestjs/common';
import { UserRepository } from '@modules/users/user.repository';
import { SignInDto } from './dto/sign-in.dto';

@Injectable()
export class UserService {
  constructor(private readonly userRepository: UserRepository) {}

  async signIn(body: SignInDto) {
    console.log('로그인', body);
  }
}
