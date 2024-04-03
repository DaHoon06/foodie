import { Module } from '@nestjs/common';
import { FileService } from '@modules/file/file.service';
import { FileImageRepository } from '@modules/file/file.image.repository';
import { FileController } from '@modules/file/file.controller';

@Module({
  imports: [],
  controllers: [FileController],
  providers: [FileService, FileImageRepository],
})
export class FileModule {}
