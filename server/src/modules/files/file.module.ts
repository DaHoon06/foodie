import { Module } from '@nestjs/common';
import { FileService } from '@modules/files/file.service';
import { FileImageRepository } from '@modules/files/file.image.repository';
import { FileController } from '@modules/files/file.controller';
import { FeedModule } from '@modules/feeds/feed.module';
import { UserModule } from '@modules/users/user.module';

@Module({
  imports: [FeedModule, UserModule],
  controllers: [FileController],
  providers: [FileService, FileImageRepository],
})
export class FileModule {}
