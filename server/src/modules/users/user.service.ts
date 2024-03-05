import {Injectable} from "@nestjs/common";
import {UserRepository} from "@modules/users/user.repository";

@Injectable()
export class UserService {
  constructor(
    private readonly userRepository: UserRepository,
  ) {}
}
