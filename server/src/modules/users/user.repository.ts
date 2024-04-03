import { Injectable } from '@nestjs/common';
import { DataSource, Repository } from 'typeorm';
import { UserEntity } from './entities/user.entity';

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
    const userGroup = await this.createQueryBuilder('user')
      .where('user.creatorId != :creatorId', { creatorId })
      .orderBy('RAND()')
      .limit(10)
      .getMany();
    console.log(userGroup);
  }
}
