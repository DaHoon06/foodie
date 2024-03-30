import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateFeedDto } from './dto/create.feed.dto';
import { FeedRepository } from './feed.repository';
import { UserService } from '@modules/users/user.service';
import { UserEntity } from '@modules/users/entities/user.entity';
import { FeedEntity } from './entities/feed.entity';

@Injectable()
export class FeedService {
  constructor(
    private readonly userService: UserService,
    private readonly feedRepository: FeedRepository,
  ) {}

  async createFeed(body: CreateFeedDto) {
    try {
      let findUser: UserEntity = await this.userService.findOneUserByCreatorId(
        body.user.id,
      );
      // 유저가 없다 그럼 새로 추가
      if (!findUser) {
        findUser = await this.userService.createUser(body.user);
      }
      const feed = FeedEntity.create({
        content: body.content,
        user: findUser,
      });

      await this.feedRepository.save(feed);
    } catch (e) {
      throw new BadRequestException('피드 작성 실패');
    }
  }

  async findRecentlyFeed(creatorId: string) {
    const findUser: UserEntity =
      await this.userService.findOneUserByCreatorId(creatorId);
    return this.feedRepository.findRecentlyFeed(findUser._id);
  }

  async findAll() {
    return this.feedRepository.findAll();
  }
}
