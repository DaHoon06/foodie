import { Module } from '@nestjs/common';
import { FeedService } from './feed.service';
import { FeedRepository } from './feed.repository';
import { FeedController } from './feed.controller';
import { UserModule } from '@modules/users/user.module';
import { ShopModule } from '@modules/shop/shop.module';

@Module({
  imports: [UserModule, ShopModule],
  controllers: [FeedController],
  providers: [FeedService, FeedRepository],
  exports: [],
})
export class FeedModule {}
