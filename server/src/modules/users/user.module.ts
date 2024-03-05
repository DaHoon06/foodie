import { Module } from '@nestjs/common';
import { UserController } from '@modules/users/user.controller';
import { UserService } from '@modules/users/user.service';
import { UserRepository } from '@modules/users/user.repository';
import { UserFeature } from '@modules/users/schema/user.schema';

@Module({
  imports: [UserFeature],
  controllers: [UserController],
  providers: [UserService, UserRepository],
})
export class UserModule {}
