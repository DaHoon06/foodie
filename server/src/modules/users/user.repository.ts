import { Injectable } from '@nestjs/common';
import { DataSource, Repository } from 'typeorm';
import { UserEntity } from './entities/user.entity';
import { ProfileUpdateDto } from '@modules/users/dto/profile.update.dto';
import { JwtPayload } from '@modules/auth/dto/jwt.dto';

@Injectable()
export class UserRepository extends Repository<UserEntity> {
  constructor(private readonly dataSource: DataSource) {
    super(UserEntity, dataSource.createEntityManager());
  }

  async createUser(user: UserEntity): Promise<UserEntity> {
    return UserEntity.create(user).save();
  }

  async findOneUserByCreatorId(creatorId: string): Promise<UserEntity> {
    return this.createQueryBuilder('user')
      .where('user.creatorId = :creatorId', {
        creatorId,
      })
      .limit(1)
      .getOne();
  }

  async findOneUser(username: string): Promise<UserEntity> {
    return this.createQueryBuilder('user')
      .where('user.username = :username', {
        username,
      })
      .getOne();
  }

  async randomRecommendUser(creatorId: string) {
    let queryBuilder = this.createQueryBuilder('user')
      .orderBy('RAND()')
      .limit(10);

    if (creatorId)
      queryBuilder = queryBuilder.andWhere('user.creatorId != :creatorId', {
        creatorId,
      });
    const userGroup = await queryBuilder.getMany();

    return userGroup;
  }

  async profileUpdate(body: ProfileUpdateDto, user: JwtPayload) {
    const { id } = user;
    await UserEntity.update(
      { creatorId: id },
      {
        ...body,
      },
    );
  }
}
