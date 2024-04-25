import { Injectable } from '@nestjs/common';
import { UserRepository } from '@modules/users/user.repository';
import { UserDto } from './dto/sign-in.dto';
import { AuthService } from '@modules/auth/auth.service';
import { UserEntity } from './entities/user.entity';

@Injectable()
export class UserService {
  constructor(
    private readonly authService: AuthService,
    private readonly userRepository: UserRepository,
  ) {}

  async findOneUserByCreatorId(id: string): Promise<UserEntity> {
    return this.userRepository.findOneUserByCreatorId(id);
  }

  async createUser(user: UserDto) {
    const userEntity = UserEntity.create({
      username: user.username,
      creatorId: user.id,
      description: '',
    });
    return this.userRepository.createUser(userEntity);
  }

  // 오늘의 사용자 조회
  async randomRecommendUser(creatorId: string) {
    return this.userRepository.randomRecommendUser(creatorId);
  }

  async userChecked(user: any): Promise<string> {
    const { id, name } = user;
    const findUser = await this.findOneUserByCreatorId(id);

    let userData = findUser;
    if (!findUser) {
      const data = {
        username: name,
        id,
      };
      userData = await this.createUser(data);
    }
    console.log(userData);
    // token 생성
    return this.authService.createToken({ id, username: name });
  }
}
