import { Injectable, NotFoundException } from '@nestjs/common';
import { UserRepository } from '@modules/users/user.repository';
import { SignInDto } from './dto/sign-in.dto';
import { AuthService } from '@modules/auth/auth.service';

@Injectable()
export class UserService {
  constructor(
    private readonly authService: AuthService,
    private readonly userRepository: UserRepository,
  ) {}

  async signIn(body: SignInDto): Promise<string> {
    const findUser = await this.userRepository.findOneUser(body.username);
    if (!findUser) {
      throw new NotFoundException('로그인 정보를 다시 확인해주세요.');
    }

    const token = this.authService.createToken({
      username: body.username,
      id: body.token,
    });

    return token;
  }
}
