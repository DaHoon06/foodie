import { FeedEntity } from '@modules/feeds/entities/feed.entity';
import { FeedLikeEntity } from '@modules/feeds/entities/feed-like.entity';
import { FeedThumbnailEntity } from '@modules/feeds/entities/feed.thumbnail.entity';
import { UserEntity } from '@modules/users/entities/user.entity';
import { ShopEntity } from '@modules/shop/entities/shop.entity';
import { FileImageEntity } from '@modules/file/entities/file.image.entity';

export const entities = [
  FeedEntity,
  FeedLikeEntity,
  FeedThumbnailEntity,
  UserEntity,
  ShopEntity,
  FileImageEntity,
];
