import {
  BadRequestException,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { PutObjectCommand, S3Client } from '@aws-sdk/client-s3';
import { ConfigService } from '@nestjs/config';
import * as fs from 'fs';
import { FileToS3 } from '@modules/files/enum/file.enum';
import { FileImageRepository } from './file.image.repository';
import { FileObjectDto } from '@modules/files/dto/file.object.dto';
import { FeedService } from '@modules/feeds/feed.service';
import { UserService } from '@modules/users/user.service';
import { FeedEntity } from '@modules/feeds/entities/feed.entity';
import { JwtPayload } from '@modules/auth/dto/jwt.dto';
import { UserEntity } from '@modules/users/entities/user.entity';

@Injectable()
export class FileService {
  private readonly s3Client: S3Client;

  constructor(
    private readonly fileImageRepository: FileImageRepository,
    private readonly userService: UserService,
    private readonly feedService: FeedService,
    private readonly configService: ConfigService,
  ) {
    this.s3Client = new S3Client({
      region: 'ap-northeast-2',
      credentials: {
        accessKeyId: this.configService.get('AWS_S3_ACCESS_KEY'),
        secretAccessKey: this.configService.get('AWS_S3_SECRET_KEY'),
      },
    });
  }

  async createFileData(files: Array<Express.Multer.File>, user: JwtPayload) {
    const fileObjs = await this.fileUploadToS3(files);
    const feed: FeedEntity = await this.feedService.findOneById(user.id);
    for (const file of fileObjs) {
      const createData = {
        ...file,
        fileType: 'feed',
        feed,
        user: feed.user,
      };
      this.fileImageRepository.createFileData(createData);
    }
  }

  async createProfileFileData(
    files: Array<Express.Multer.File>,
    user: JwtPayload,
  ) {
    if (files.length === 0)
      throw new BadRequestException('파일이 존재하지 않습니다.');
    const findUser: UserEntity = await this.userService.findOneUserByCreatorId(
      user.id,
    );

    if (!findUser)
      throw new UnauthorizedException(
        '사용자 정보가 유효하지 않습니다. 로그인 정보를 다시 확인해 주세요.',
      );

    const fileObjs = await this.fileUploadToS3(files);
    let path = '';
    for (const file of fileObjs) {
      const createData = {
        ...file,
        fileType: 'user',
        user: findUser,
      };
      path = file.path1;
      await this.fileImageRepository.createFileData(createData);
    }

    await this.userService.profileUpdate({ profileImage: path }, user);
  }

  async fileUploadToS3(
    files: Array<Express.Multer.File>,
  ): Promise<FileObjectDto[]> {
    const fileObjs: FileObjectDto[] = [];
    if (files.length === 0) return fileObjs;

    for (const file of files) {
      const s3Key = this.generateS3Key(file.filename);
      const s3Path = await this.uploadToS3(file, s3Key);
      /** @description __dirname/uploads 폴더 내에 파일이 생기면 업로드 이후에 삭제를 진행합니다.*/
      await this.removeFile(file.path);
      const fileObj = {
        name: file.filename,
        originName: file.originalname,
        type: file.mimetype,
        size: file.size,
        path1: s3Path,
        path2: file.path,
      };
      fileObjs.push(fileObj);
    }
    return fileObjs;
  }

  /** @description s3로 업로드 객체 */
  private async uploadToS3(
    file: Express.Multer.File,
    s3Key: string,
  ): Promise<string> {
    const fileStream = fs.createReadStream(file.path);
    const bucketName = this.configService.get<string>('AWS_S3_BUCKET');
    const region = this.configService.get<string>('AWS_REGION');
    await this.s3Client.send(
      new PutObjectCommand({
        Bucket: bucketName,
        Key: s3Key,
        Body: fileStream,
        ContentType: FileToS3.CONTENTTYPE,
      }),
    );
    return `https://${bucketName}.s3.${region}.amazonaws.com/${s3Key}`;
  }

  private generateS3Key(reFileName: string) {
    const path = FileToS3.PATH;
    return `${path}/${reFileName}`;
  }

  private async removeFile(path: string) {
    try {
      await fs.promises.unlink(path);
      console.log(`File ${path} has been deleted.`);
    } catch (error) {
      console.error(`Error while deleting file ${path}:`, error);
    }
  }
}
