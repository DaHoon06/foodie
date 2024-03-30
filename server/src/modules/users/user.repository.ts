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

  async findOneUserByCreateorId(id: string): Promise<UserEntity> {
    return this.createQueryBuilder('user')
      .where('user.creatorId = :id', {
        id,
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
}
