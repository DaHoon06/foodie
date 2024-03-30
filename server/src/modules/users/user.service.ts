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
    return this.userRepository.findOneUserByCreateorId(id);
  }

  async createUser(user: UserDto) {
    const userEntity = UserEntity.create({
      username: user.username,
      creatorId: user.id,
      hashname: 'hash',
    });
    return this.userRepository.createUser(userEntity);
  }
}
