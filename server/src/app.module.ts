import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { DataBaseModule } from '@config/db/db.module';
import { UserModule } from '@modules/users/user.module';
import { FeedModule } from '@modules/feeds/feed.module';
import { ShopModule } from '@modules/shop/shop.module';
import { FileModule } from '@modules/file/file.module';

@Module({
  imports: [DataBaseModule, UserModule, FeedModule, ShopModule, FileModule],
  controllers: [AppController],
  providers: [],
})
export class AppModule {}
