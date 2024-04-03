import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import {
  CreateFeedDataDto,
  CreateFeedDto,
  ShopDto,
} from './dto/create.feed.dto';
import { FeedRepository } from './feed.repository';
import { UserService } from '@modules/users/user.service';
import { UserEntity } from '@modules/users/entities/user.entity';
import { FeedEntity } from './entities/feed.entity';
import { ShopService } from '@modules/shop/shop.service';
import { ShopEntity } from '@modules/shop/entities/shop.entity';

@Injectable()
export class FeedService {
  constructor(
    private readonly userService: UserService,
    private readonly shopService: ShopService,
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

      const createData: CreateFeedDataDto = {
        content: body.content,
        user: findUser,
      };

      if (this.addressItemCheck(body.item)) {
        const { item } = body;
        const { address } = item;

        let shop: ShopEntity = await this.shopService.findOneByXy(
          address.x,
          address.y,
        );
        // 없으면 추가
        try {
          if (!shop) {
            shop = await this.shopService.createShop(findUser, item);
          }

          createData.shop = shop;
        } catch (e) {
          console.log('shop 등록 실패');
        }
      }

      const feed = FeedEntity.create({ ...createData });
      await this.feedRepository.save(feed);
    } catch (e) {
      throw new BadRequestException('피드 작성 실패');
    }
  }

  private addressItemCheck(item: ShopDto): boolean {
    for (const key in item) {
      if (typeof item[key] === 'object') {
        for (const innerKey in item[key]) {
          if (item[key][innerKey] === '') return false;
        }
      } else {
        if (item[key] === '') return false;
      }
    }
    return true;
  }

  async findRecentlyFeed(creatorId: string) {
    const findUser: UserEntity =
      await this.userService.findOneUserByCreatorId(creatorId);
    console.log(creatorId);
    if (!findUser)
      throw new NotFoundException('로그인 정보가 유효하지 않습니다.');
    return this.feedRepository.findRecentlyFeed(findUser._id);
  }

  async findAll() {
    return this.feedRepository.findAll();
  }
}
