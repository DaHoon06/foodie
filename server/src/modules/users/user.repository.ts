import { Injectable } from '@nestjs/common';
import { DataSource, Repository } from 'typeorm';
import { UserEntity } from './entities/user.entity';

@Injectable()
export class UserRepository extends Repository<UserEntity> {
  constructor(private readonly dataSource: DataSource) {
    super(UserEntity, dataSource.createEntityManager());
  }

  async findOneUser(username: string): Promise<UserEntity> {
    return this.createQueryBuilder('user')
      .where('user.username = :username', {
        username,
      })
      .getOne();
  }
}
