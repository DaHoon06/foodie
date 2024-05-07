import {
  Controller,
  Post,
  UploadedFiles,
  UseGuards,
  UseInterceptors,
} from '@nestjs/common';
import { diskStorage } from 'multer';
import { FilesInterceptor } from '@nestjs/platform-express';
import * as path from 'path';
import * as fs from 'node:fs';
import { FileService } from '@modules/files/file.service';
import { UserObject } from '@decorators/user.object.decorator';
import { JwtPayload } from '@modules/auth/dto/jwt.dto';
import { JwtGuard } from '@modules/auth/guards/jwt.guard';

@UseGuards(JwtGuard)
@Controller('files')
export class FileController {
  private readonly filesPath: string;

  constructor(private readonly fileService: FileService) {
    this.filesPath = path.join(__dirname, 'uploads/');
    if (!fs.existsSync(this.filesPath)) {
      fs.mkdirSync(this.filesPath);
    }
  }

  @UseInterceptors(
    FilesInterceptor('files', 10, {
      storage: diskStorage({
        destination: path.join(__dirname, 'uploads/'),
        filename: (req, file, cb) => {
          const originalNameBuffer = Buffer.from(file.originalname, 'binary');
          file.originalname = originalNameBuffer.toString('utf-8');
          const randomName = Array(32)
            .fill(null)
            .map(() => Math.round(Math.random() * 16).toString(16))
            .join('');
          cb(null, `${randomName}_${file.originalname}`);
        },
      }),
    }),
  )
  @Post('/upload')
  uploadFile(
    @UserObject() user: JwtPayload,
    @UploadedFiles() files: Array<Express.Multer.File>,
  ) {
    return this.fileService.createFileData(files, user);
  }

  @UseInterceptors(
    FilesInterceptor('files', 10, {
      storage: diskStorage({
        destination: path.join(__dirname, 'uploads/'),
        filename: (req, file, cb) => {
          const originalNameBuffer = Buffer.from(file.originalname, 'binary');
          file.originalname = originalNameBuffer.toString('utf-8');
          const randomName = Array(32)
            .fill(null)
            .map(() => Math.round(Math.random() * 16).toString(16))
            .join('');
          cb(null, `${randomName}_${file.originalname}`);
        },
      }),
    }),
  )
  @Post('/upload/profile')
  uploadProfileFile(
    @UploadedFiles() files: Array<Express.Multer.File>,
    @UserObject() user: JwtPayload,
  ) {
    return this.fileService.createProfileFileData(files, user);
  }
}
