import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { DataBaseModule } from './db/db.module';
import { UserModule } from '@modules/users/user.module';
import { FeedModule } from '@modules/feeds/feed.module';
import { ShopModule } from '@modules/shop/shop.module';
import { FileModule } from '@modules/files/file.module';
import { SseModule } from '@modules/sse/sse.module';

@Module({
  imports: [
    DataBaseModule,
    UserModule,
    FeedModule,
    ShopModule,
    FileModule,
    SseModule,
  ],
  controllers: [AppController],
  providers: [],
})
export class AppModule {}
