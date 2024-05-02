import { FeedEntity } from '@modules/feeds/entities/feed.entity';
import { FeedLikeEntity } from '@modules/feeds/entities/feed-like.entity';
import { UserEntity } from '@modules/users/entities/user.entity';
import { ShopEntity } from '@modules/shop/entities/shop.entity';
import { FileImageEntity } from '@modules/files/entities/file.image.entity';

export const entities = [
  FeedEntity,
  FeedLikeEntity,
  UserEntity,
  ShopEntity,
  FileImageEntity,
];
