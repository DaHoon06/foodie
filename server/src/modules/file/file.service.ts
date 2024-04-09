import { Injectable } from '@nestjs/common';
import { PutObjectCommand, S3Client } from '@aws-sdk/client-s3';
import { ConfigService } from '@nestjs/config';
import * as fs from 'fs';
import { FileToS3 } from '@modules/file/enum/file.enum';
import { FileImageRepository } from './file.image.repository';

@Injectable()
export class FileService {
  private readonly s3Client: S3Client;

  constructor(
    private readonly fileImageRepository: FileImageRepository,
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

  async createFileData(files: Array<Express.Multer.File>, id: string) {
    console.log(files, id);
    // todo s3에 업로드
    await this.fileUploadToS3(files);

    //todo file entity에 업데이트 (s3 upload 주소도 함께 포함)
  }

  async fileUploadToS3(files: Array<Express.Multer.File>) {
    const fileSend: { fileName?: string; fileKey?: string }[] = [];
    if (files.length === 0) return fileSend;
    /** @description formData 배열로 올 경우 for으로 하나씩 업로드를 진행 */
    for (const file of files) {
      const s3Key = this.generateS3Key(file.filename);
      await this.uploadToS3(file, s3Key);
      /** @description __dirname/uploads 폴더내에 파일이 생기면 업로드 이후에 삭제를 진행합니다.*/
      await this.removeFile(file.path);
      fileSend.push({ fileName: file.originalname, fileKey: file.filename });
    }
    return fileSend;
  }

  /** @description s3로 업로드 객체 */
  private async uploadToS3(file: Express.Multer.File, s3Key: string) {
    const fileStream = fs.createReadStream(file.path);
    await this.s3Client.send(
      new PutObjectCommand({
        Bucket: this.configService.get('AWS_S3_BUCKET_NAME'),
        Key: s3Key,
        Body: fileStream,
        ContentType: FileToS3.CONTENTTYPE,
      }),
    );
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
